<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function showLogin()
    {
        return inertia('Login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($credentials)) {
            return back()->withErrors([
                'email' => 'Invalid credentials.',
            ]);
        }

        $request->session()->regenerate();

        return redirect()->intended('/'); // ⬅️ Redirect ke dashboard (Welcome.jsx)
    }

    public function showRegister()
    {
        return inertia('Register');
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:6',
            'job' => 'required|string|max:255', 
            'avatar' => 'nullable|image|max:2048', // validasi file image max 2MB // validasi job
        ]);
        $avatarPath = null;
        if ($request->hasFile('avatar')) {
        $avatarPath = $request->file('avatar')->store('avatars', 'public');
    }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'job' => $request->job,
            'avatar' => $avatarPath,
        ]);

        Auth::login($user);

        return redirect('/'); // ⬅️ Redirect ke dashboard (Welcome.jsx)
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }
}
