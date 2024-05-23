<?php

namespace App\Http\Controllers;

use App\Models\Cupon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CuponsController extends Controller
{
    public function getCupons()
    {
        $cupons = Cupon::with('offer:id,product,description,discount')->get();

        $cupons->each(function ($cupon) {
        $cupon->makeHidden('user_id');
        });
        return response()->json($cupons, 200);
    }

    public function createCupon(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'code' => 'required|numeric|max:999999|unique:cupons',
            'state' => 'required|string|max:255',
            'user_id' => 'required|exists:users,id',
            'offer_id' => 'required|exists:offers,id'
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            if ($errors->has('code')) {
                return response()->json(['message' => 'Cupon already exists'], 403);
            } else {
                return response()->json(['errors' => $errors], 422);
            }
        }

        $existingCupon = Cupon::where('user_id', $request->user_id)
            ->where('offer_id', $request->offer_id)
            ->first();

        if ($existingCupon) {
            return response()->json(['Error' => 'The user already has a coupon for this offer'], 403);
        }

        $cupon = Cupon::create([
            'code' => $request->input('code'),
            'state' => $request->input('state'),
            'user_id' => $request->input('user_id'),
            'offer_id' => $request->input('offer_id'),
        ]);

        return response()->json($cupon, 201);
    }

    public function redeemCoupon(string $id)
    {
        $cupon = Cupon::find($id);

        if (!$cupon) {
            return response()->json(['error' => 'Coupon not found'], 404);
        }

        if ($cupon->state === 'redeemed') {
            return response()->json(['error' => 'Coupon has already been redeemed'], 409);
        }

        $cupon->state = 'redeemed';
        $cupon->save();

        return response()->json(['message' => 'Coupon redeemed successfully'], 200);
    }
}
