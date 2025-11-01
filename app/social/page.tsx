import Navigation from "../components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Social = () => {
  const socialPlatforms = [
    {
      name: "YouTube",
      handle: "@aprilparker",
      followers: "11,000+",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      icon: "📺",
      color: "primary"
    },
    {
      name: "LinkedIn",
      handle: "april-parker",
      followers: "25,000+",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      icon: "💼",
      color: "secondary"
    },
    {
      name: "Twitter",
      handle: "@aprilparker",
      followers: "15,000+",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      icon: "🐦",
      color: "primary"
    },
    {
      name: "Instagram",
      handle: "@aprilparker",
      followers: "8,000+",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
      icon: "📸",
      color: "secondary"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="mx-auto max-w-5xl px-6 py-12">
        <Card className="mb-8 text-center border-0 shadow-polished">
          <CardHeader>
            <CardTitle className="text-4xl">Connect With Me</CardTitle>
            <CardDescription className="text-base max-w-2xl mx-auto pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Follow me on these platforms for updates.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {socialPlatforms.map((platform) => (
            <Card
              key={platform.name}
              className="border-0 shadow-polished hover:shadow-xl transition-all hover:scale-[1.02] border-l-4 hover:border-l-primary"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-5xl bg-secondary/10 rounded-2xl p-4">
                    {platform.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-1">{platform.name}</h2>
                    <p className="text-secondary font-semibold mb-1">{platform.handle}</p>
                    <p className="text-primary font-semibold text-sm mb-3">{platform.followers} Followers</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{platform.description}</p>
                    <Button size="sm">Follow</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="text-center border-0 shadow-polished">
          <CardHeader>
            <CardTitle className="text-2xl">Newsletter</CardTitle>
            <CardDescription className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Subscribe for weekly updates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Social;
