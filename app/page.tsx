import Image from "next/image";
import Navigation from "./components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[350px_1fr]">
          {/* Left Sidebar - Profile Section */}
          <aside className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                {/* Profile Photo */}
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="h-48 w-48 overflow-hidden rounded-full bg-gradient-to-br from-secondary to-primary p-1">
                      <div className="h-full w-full overflow-hidden rounded-full bg-card">
                        <Image
                          src="/profile/aprils-profile.jpeg"
                          alt="April Parker"
                          width={192}
                          height={192}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg">
                      120K+ Students
                    </div>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="mb-6 text-center">
                  <h2 className="mb-2 text-3xl font-bold text-foreground">April Parker</h2>
                  <p className="text-lg text-muted-foreground">Lorem Ipsum & Dolor Sit Amet</p>
                </div>

                {/* Experience */}
                <p className="mb-6 text-center text-sm text-muted-foreground">
                  12+ years lorem ipsum dolor sit amet consectetur adipiscing elit
                </p>

                {/* Core Expertise */}
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">Core Expertise</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-secondary">•</span>
                      <span>Lorem Ipsum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-secondary">•</span>
                      <span>Dolor Sit Amet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-secondary">•</span>
                      <span>Consectetur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-secondary">•</span>
                      <span>Adipiscing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-secondary">•</span>
                      <span>Eiusmod Tempor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-secondary">•</span>
                      <span>Incididunt</span>
                    </li>
                  </ul>
                </div>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                  <span>Lorem</span>
                  <span>•</span>
                  <span>Ipsum</span>
                  <span>•</span>
                  <span>Dolor</span>
                </div>

                {/* Contact Button */}
                <Button className="mb-4 w-full" size="lg">
                  📧 Contact for Partnerships
                </Button>

                {/* Email */}
                <p className="mb-6 text-center text-sm text-muted-foreground">lorem@ipsum.dolor</p>

                {/* Courses & Education */}
                <div className="mb-6">
                  <h3 className="mb-3 text-center text-sm font-semibold text-foreground">Courses & Education</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Button variant="outline" size="sm">
                      Udemy
                    </Button>
                    <Button variant="outline" size="sm">
                      Coursera
                    </Button>
                    <Button variant="outline" size="sm">
                      Codecademy
                    </Button>
                  </div>
                </div>

                {/* Social & Content */}
                <div>
                  <h3 className="mb-3 text-center text-sm font-semibold text-foreground">Social & Content</h3>
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="sm">
                      YouTube
                    </Button>
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Right Content Area */}
          <main className="space-y-8">
            {/* About Section */}
            <Card id="about">
              <CardHeader>
                <CardTitle className="text-3xl">About</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
                </p>
              </CardContent>
            </Card>

            {/* Products Built Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Products Built</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Product 1 */}
                <Card className="border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className="text-xl font-bold text-foreground">lorem.ipsum</h3>
                      <div className="text-right text-sm">
                        <div className="font-semibold text-secondary">25K+ Users</div>
                        <div className="text-muted-foreground">5K+ Paid</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                    </p>
                  </CardContent>
                </Card>

                {/* Product 2 */}
                <Card className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className="text-xl font-bold text-foreground">dolor.sit</h3>
                      <div className="text-right text-sm">
                        <div className="font-semibold text-primary">35K+ Users</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Consectetur adipiscing elit sed do eiusmod tempor incididunt
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* Professional Background Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Professional Background</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </CardContent>
            </Card>

            {/* Teaching & Education Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Teaching & Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <div>
                      <span className="font-semibold text-foreground">Udemy:</span> Lorem ipsum dolor sit amet
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <span className="font-semibold text-foreground">Coursera:</span> Consectetur adipiscing elit
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💻</span>
                    <div>
                      <span className="font-semibold text-foreground">Codecademy:</span> Sed do eiusmod tempor
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📺</span>
                    <div>
                      <span className="font-semibold text-foreground">YouTube:</span> Incididunt ut labore
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🏢</span>
                    <div>
                      <span className="font-semibold text-foreground">Bootcamps & Workshops:</span> Dolore magna aliqua ut enim
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <span className="font-semibold text-foreground">Total Reach:</span> Minim veniam quis nostrud exercitation ullamco
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Trusted By Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Trusted By</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="lg">
                    Lorem Ipsum
                  </Button>
                  <Button variant="outline" size="lg">
                    Dolor Sit
                  </Button>
                  <Button variant="outline" size="lg">
                    Amet Corp
                  </Button>
                  <Button variant="outline" size="lg">
                    Consectetur
                  </Button>
                  <Button variant="outline" size="lg">
                    Adipiscing Ltd
                  </Button>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
