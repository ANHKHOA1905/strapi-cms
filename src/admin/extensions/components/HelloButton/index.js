// src/admin/extensions/components/HelloWorldButton/index.tsx

import React from "react";
import { Button } from "@strapi/design-system/Button";

const HelloWorldButton = () => {
    return (
        <Button
            variant="secondary"
            onClick={() => alert("Hello World")}
        >
            Hello World
        </Button>
    );
};

export default HelloWorldButton;