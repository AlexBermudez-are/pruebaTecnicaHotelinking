<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class OfferController extends Controller
{
    function __invoke()
    {
        $offers = DB::table('offers')->get();
        return response()->json($offers, 200);
    }
}
