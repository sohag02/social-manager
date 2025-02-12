import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { platforms } from "@/lib/platforms";
import { getConnectedPlatformsByUserId } from "@/server/db/queries";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Integrations() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const integrations = await getConnectedPlatformsByUserId(userId);
  const connected_platforms = integrations.flatMap(
    (integration) => integration.platform,
  );

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-4">
      <h2 className="mx-4 mb-6 text-lg font-semibold sm:mx-0">Platforms</h2>
      <Card className="glass-morphism p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Platforms</h2>
          <Button variant="outline">Refresh Connections</Button>
        </div>

        <div className="space-y-4">
          {platforms.map((integration) => (
            <Card
              key={integration.id}
              className="border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <integration.icon className="h-10 w-10" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{integration.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {integration.description}
                    </p>
                  </div>
                </div>
                {connected_platforms.includes(integration.id) ? (
                  <Link href={`/api/${integration.id}/login`}>
                    <Button className="bg-green-400">Connected</Button>
                  </Link>
                ) : (
                  <Link href={`/api/${integration.id}/login`}>
                    <Button>Connect</Button>
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
