import React, { useState, useEffect } from "react";
import { getCategories } from "../services/api-flashcardy";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
        .then(response => setCategories(response.data));
    }, []);

    return (
        <div>
            <h1>Categories</h1>
            <select>
                {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
            </select>
        </div>
    );
};

export default Categories;