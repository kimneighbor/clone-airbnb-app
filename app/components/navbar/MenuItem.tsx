'use client'

import React from "react";

// type interface
interface MenuItemProps {
    onClick: () => void;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
                                               // 사용할 type props
                                               onClick,
                                               label
                                           }) => {

    return (
        <div
            onClick={onClick}
            className="
                px-4
                py-3
                hover:bg-neutral-100
                transition
                font-semibold
                "
        >

        </div>
    );
};

export default MenuItem;