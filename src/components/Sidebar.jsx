import React, { useState } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import "../index.css";

function Sidebar() {
    
    const [selectedCategory, setSelectedCategory] = useState('New');

    return (
        <Stack
            direction="row"
            sx={{
                msOverflowY: "auto",
                height: { sx: "auto", md: "95%" },
                flexDirection: { md: "column" },
            }}
        >
            {categories.map((category) => (
                <button
                    className="category-btn"
                    style={{
                        background: category.name === selectedCategory && "#e6e3e3",
                    }}
                    key={category.name}
                    onClick={()=>{setSelectedCategory(category.name)}}
                >
                    <span className="category-icon">{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}
        </Stack>
    );
}

export default Sidebar;

