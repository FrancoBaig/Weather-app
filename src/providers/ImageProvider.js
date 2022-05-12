import React from "react";

export async function getImage() {
    const results = await fetch(
        `http://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
        {
            headers: {
                Authentication: `Basic ${Buffer.from(
                    process.env.CLOUDINARY_CLOUD_KEY +
                        ":" +
                        process.env.CLOUDINARY_CLOUD_SECRET
                ).toString("base64")}`,
            },
        }
    ).then((r) => r.json());

    console.log(results);
}
