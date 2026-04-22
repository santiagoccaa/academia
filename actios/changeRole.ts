import { clerkClient } from "@clerk/nextjs/server";

export async function updateMetadata(userId: string) {
    const client = await clerkClient();

    await client.users.updateUserMetadata(userId, {
        publicMetadata: {
            role: "teacher",
            onboarded: true,
        },
        privateMetadata: {
            stripeId: "cus_12345",
        },
    });
}
