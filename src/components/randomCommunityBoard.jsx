import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function randomRedirect ({ CitiesInfo }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!CitiesInfo || CitiesInfo.length === 0) return;
        // pick a random city slug
        const randomCity = CitiesInfo[Math.floor(Math.random() * CitiesInfo.length)];
        navigate(`/communityboard/${randomCity.slug}`);
    }, [CitiesInfo, navigate]);

    return null;
} export default randomRedirect;
