import Navigation from "../components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <Card className="border-0 shadow-polished">
          <CardHeader>
            <CardTitle className="text-4xl">About Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur.
            </p>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
              veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
              magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-4">My Journey</h2>
            
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
              praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
              excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
              officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-4">What I Do</h2>
            
            <p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
              cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
              placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <Card className="border-2 border-secondary/20 shadow-md hover:shadow-lg transition-all hover:scale-[1.02]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">📚 Education</h3>
                  <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 shadow-md hover:shadow-lg transition-all hover:scale-[1.02]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">💼 Products</h3>
                  <p className="text-sm text-muted-foreground">Sed do eiusmod tempor incididunt ut labore</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-secondary/20 shadow-md hover:shadow-lg transition-all hover:scale-[1.02]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">🎯 Consulting</h3>
                  <p className="text-sm text-muted-foreground">Et dolore magna aliqua ut enim ad minim</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
