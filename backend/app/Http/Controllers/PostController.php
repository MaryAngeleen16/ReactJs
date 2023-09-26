<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return response()->json(["posts" => $posts], 200);
    }

    public function create()
    {
        $users = User::all();
        return response()->json(["users" => $users], 200);
    }

    public function store(Request $request)
    {
        $post = new Post;
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->slug = $request->input('slug');
        $post->user_id = $request->input('user');
        $post->save();

        return response()->json(["post" => $post, "message" => "successfully created"], 200);
    }

    public function show(string $id)
    {
        $post = Post::find($id);
        return response()->json(["post" => $post], 200);
    }

    public function edit(string $id)
    {
        $post = Post::find($id);
        return response()->json(["post" => $post], 200);
    }

    public function update(Request $request, string $id)
    {
        $post = Post::find($id);
        $post->update($request->all());

        return response()->json(["post" => $post, "message" => "successfully updated"], 200);
    }

    public function destroy(string $id)
    {
        Post::destroy($id);
        return response()->json(["message" => "successfully deleted"], 200);
    }
}
