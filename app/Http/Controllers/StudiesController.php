<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Study;

class StudiesController extends Controller
{
    public function store(Request $request)
    {
        $input = $request->all();
        $study = Study::create($input);
        return response()->json($study);
    }

    public function index()
    {
        $studies = Study::all();
        return response()->json($studies);
    }

    public function delete($study)
    {
        $deletedStudy = Study::find($study)->delete();
        return response()->json($deletedStudy);
    }
}
