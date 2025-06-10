import { Link } from 'react-router-dom';
import { CursorSplash } from "../components/CursorSplash.tsx";
import { Footer } from "../components/Footer.tsx";
import {BlogHeader} from "../components/BlogHeader.tsx";

export const InternshipPage = () => {
    return (
        <div
            className="isolate min-h-screen"
            style={{ color: 'var(--text-color)' }}
        >
            <BlogHeader />
            <CursorSplash />
            <div className="max-w-4xl mx-auto px-4 py-20">
                <h1
                    className="text-4xl mx-auto px-4 py-20"
                    style={{
                        backgroundImage: 'linear-gradient(to right, var(--accent-color), var(--highlight-orange))',
                    }}
                >
                    Internship Project Deep Dive
                </h1>
                <div className="prose lg:prose-xl" style={{ color: 'var(--text-color)'}}>
                    <p>
                        Tada tada tada
                    </p>
                </div>
                <Link
                    to="/"
                    state={{ skipLoadingAnimation: true }}
                    className="inline-block mt-8 text-lg transition-colors"
                    style={{
                        color: 'var(--highlight-orange)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--highlight-orange)')}
                >
                    &larr; Back to Portfolio
                </Link>
            </div>
            <Footer />
        </div>
    );
};