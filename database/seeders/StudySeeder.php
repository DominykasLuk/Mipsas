<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Study;
use Illuminate\Support\Facades\File;

class StudySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Study::truncate();

        $json = File::get(public_path("data/list.json"));
        $data = json_decode($json);

        foreach ($data->data as $key => $value) {
            Study::create([
                "name" => $value->name,
                "statusKey" => $value->statusKey,
                "studyThumbnail" => $value->studyThumbnail,
                "imagesCount" => $value->imagesCount,
                "tags" => $value->tags
            ]);
        }

    }
}
