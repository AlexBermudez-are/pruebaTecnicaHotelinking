<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    public function getUserUnique(string $id)
    {
        $user = User::with(['cupons.offer:id,product,description,discount'])->find($id);

        $user->cupons->each(function ($cupon) {
            $cupon->makeHidden('user_id');
            $cupon->makehidden('offer_id');
        });

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json($user);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'subname' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
        ]);
    
        if ($validator->fails()) {
            $errors = $validator->errors();
            if ($errors->has('email')) {
                return response()->json(['Error' => 'User already exist'], 403);
            } else {
                return response()->json(['errors' => $errors], 422);
            }
        }

        $user = User::create([
            'name' => $request->input('name'),
            'subname' => $request->input('subname'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);
        return response()->json($user, 201);
    }

    public function login(Request $request) 
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
        return response()->json(['Error' => 'User not found'], 404);
        }

        if (!Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Incorrect password'], 401);
        }

        return response()->json(['user'=> $user], 200);
    }
}
