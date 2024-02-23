import Navigation from "./Navigation";

export default function Header() {
    return (
        <div>
            <h1>Anthony Rosati</h1>
            {/* Utilizes Navigation component to manage nav links */}
            <h2>
                <Navigation />
            </h2>
        </div>
    );
};