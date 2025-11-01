import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TestColors = () => {
  return (
    <div className="min-h-screen bg-background p-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <h1 className="text-4xl font-bold text-foreground">Color Palette Test</h1>
        
        {/* Background Colors */}
        <Card className="border-0 shadow-polished">
          <CardHeader>
            <CardTitle>Background Colors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground">Tailwind Classes:</p>
              <div className="h-20 rounded-lg bg-background border-2 border-foreground/20 flex items-center justify-center">
                <span className="text-foreground font-semibold">bg-background (Ivory #D8D9D0)</span>
              </div>
              <div className="h-20 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-semibold">bg-primary (Desert Sun #D18C30)</span>
              </div>
              <div className="h-20 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-semibold">bg-secondary (Tiffany Blue #2897B0)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Buttons */}
        <Card className="border-0 shadow-polished">
          <CardHeader>
            <CardTitle>Button Components</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button>Default (Primary)</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card className="border-0 shadow-polished">
          <CardHeader>
            <CardTitle>Badge Components</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Badge>Default (Primary)</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Text Colors */}
        <Card className="border-0 shadow-polished">
          <CardHeader>
            <CardTitle>Text Colors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground text-lg">text-foreground (Black #111410)</p>
            <p className="text-primary text-lg">text-primary (Desert Sun #D18C30)</p>
            <p className="text-secondary text-lg">text-secondary (Tiffany Blue #2897B0)</p>
            <p className="text-muted-foreground text-lg">text-muted-foreground (Gray)</p>
          </CardContent>
        </Card>

        {/* Direct Color Usage */}
        <Card className="border-0 shadow-polished">
          <CardHeader>
            <CardTitle>Direct Color Usage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-desert-sun">
              <p className="text-white font-semibold">Using bg-desert-sun (Tailwind color)</p>
            </div>
            <div className="p-4 rounded-lg bg-tiffany-blue">
              <p className="text-white font-semibold">Using bg-tiffany-blue (Tailwind color)</p>
            </div>
            <div className="p-4 rounded-lg bg-ivory border-2 border-foreground/20">
              <p className="text-foreground font-semibold">Using bg-ivory (Tailwind color)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestColors;

