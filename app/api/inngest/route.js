import { serve } from "inngest/next";
import { inngest, sysnUserCreation, sysnUserDeletion, sysnUserUpdation } from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    sysnUserCreation,
    sysnUserUpdation,
    sysnUserDeletion
  ],
});
