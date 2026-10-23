
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetSent, setResetSent] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validatePassword = (password) => {
        return{
            minLength: password.length >= 8,
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasNumber: /\d/.test(password),
            hasSpecialChar: /[^A-Za-z0-9\s]/.test(password),
            
        };
    };

    const passwordValidation = validatePassword(formData.password);

    const isPasswordValid = 
        passwordValidation.minLength &&
        passwordValidation.hasUpperCase &&
        passwordValidation.hasLowerCase &&
        passwordValidation.hasNumber &&
        passwordValidation.hasSpecialChar;

    const getPasswordMessage = () => {
        const validation = validatePassword(password);

        if (!validation.minLength) {
            return "Password must be at least 8 characters long.";
        }
        if (!validation.hasUpperCase) {
            return "Password must include at least one uppercase letter.";
        }
        if (!validation.hasLowerCase) {
            return "Password must include at least one lowercase letter.";
        }
        if (!validation.hasNumber) {
            return "Password must include at least one number.";
        }
        if (!validation.hasSpecialChar) {
            return "Password must include at least one special character.";
        }
        return "Password is valid.";
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setPasswordError('');

        // Forgot password form
        if (isForgotPassword) {
            setResetSent(true);
            return;
        }

        // Signup password validation
        if (!isLogin) {
            console.log("Password:", formData.password);
            console.log("Validation:", validatePassword(formData.password));

            if (!isPasswordValid)
                setPasswordError("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
                return;
            
        }

        if (formData.password !== formData.confirmPassword) {
            setPasswordError("Passwords do not match!");
            return;
        }

        if (isLogin) {
            console.log("Logging in:", formData.email);
        } else {
            console.log("Creating account:", formData.email);
        }
    };

    const handleForgotPassword = () => {
        setIsForgotPassword(true);
        setIsLogin(false);
        setResetSent(false);
    };

    const handleBackToLogin = () => {
        setIsForgotPassword(false);
        setIsLogin(true);
        setResetSent(false);
    };

    // --------------------------------
    // FORGOT PASSWORD SCREEN
    // --------------------------------

    if (isForgotPassword) {
        return (
            <main className="auth-page">
                <div className="auth-card">

                    <Link to="/" className="auth-logo">
                        <span className="brand-mark">⌂</span>

                        <span>
                            <strong>Hidden Kenya</strong>
                            <em>Stays</em>
                        </span>
                    </Link>

                    {!resetSent ? (
                        <>
                            <div className="auth-header">
                                <h1>Reset your password</h1>

                                <p>
                                    Enter the email address associated
                                    with your account and we'll send you
                                    a link to reset your password.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="reset-email">
                                        Email address
                                    </label>

                                    <input
                                        id="reset-email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="auth-submit"
                                >
                                    Send Reset Link
                                </button>
                            </form>

                            <div className="auth-switch">
                                <button
                                    type="button"
                                    onClick={handleBackToLogin}
                                >
                                    ← Back to Login
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="reset-success">
                            <div className="success-icon">
                                ✓
                            </div>

                            <div className="auth-header">
                                <h1>Check your email</h1>

                                <p>
                                    If an account exists for{" "}
                                    <strong>{formData.email}</strong>,
                                    we've sent instructions to reset
                                    your password.
                                </p>
                            </div>

                            <button
                                type="button"
                                className="auth-submit"
                                onClick={handleBackToLogin}
                            >
                                Back to Login
                            </button>
                        </div>
                    )}

                </div>
            </main>
        );
    }

    // --------------------------------
    // LOGIN / SIGNUP SCREEN
    // --------------------------------

    return (
        <main className="auth-page">
            <div className="auth-card">

                <Link to="/" className="auth-logo">
                    <span className="brand-mark">⌂</span>

                    <span>
                        <strong>Hidden Kenya</strong>
                        <em>Stays</em>
                    </span>
                </Link>

                <div className="auth-header">
                    <h1>
                        {isLogin
                            ? "Welcome back"
                            : "Create your account"}
                    </h1>

                    <p>
                        {isLogin
                            ? "Log in to continue to Hidden Kenya Stays."
                            : "Create an account to discover Kenya's hidden stays."}
                    </p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="email">
                            Email address
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">
                            Password
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            autoComplete={isLogin ? "current-password" : "new-password"}
                        />

                        {!isLogin && formData.password && (
                            <p className={isPasswordValid ? "password-valid" : "password-hint"}>
                                {isPasswordValid 
                                    ? "✓ Password meets all requirements."
                                    : getPasswordMessage(formData.password)
                                }
                            </p>
                        ) }


                    </div>

                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="confirmPassword">
                                Confirm password
                            </label>

                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className={
                                    passwordError || 
                                    (formData.confirmPassword && 
                                        formData.password !== formData.confirmPassword)
                                    ? "error" 
                                    : ""
                                }
                            />

                            {formData.confirmPassword && (
                                <p
                                    className={
                                        formData.password === formData.confirmPassword
                                            ? "valid"
                                            : "invalid"
                                    }
                                >
                                    {formData.password === formData.confirmPassword
                                        ? "✓ Passwords match"
                                        : "✗ Passwords do not match."
                                    }
                                </p>
                            )}

                            {passwordError && (
                                <p className="error-message">
                                    {passwordError}
                                </p>
                            )}
                        </div>
                    )}

                    {isLogin && (
                        <div className="forgot-password">
                            <button
                                type="button"
                                onClick={handleForgotPassword}
                            >
                                Forgot password?
                            </button>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="auth-submit"
                    >
                        {isLogin
                            ? "Log In"
                            : "Create Account"}
                    </button>
                </form>

                <div className="auth-switch">
                    <span>
                        {isLogin
                            ? "Don't have an account?"
                            : "Already have an account?"}
                    </span>

                    <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Sign Up" : "Log In"}
                    </button>
                </div>

            </div>
        </main>
    );
}
