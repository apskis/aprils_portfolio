import Image from "next/image";
import Navigation from "./components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[350px_1fr]">
          {/* Left Sidebar - Profile Section */}
          <aside className="space-y-6">
            <Card className="border-0 shadow-polished">
              <CardContent className="pt-8 pb-8">
                {/* Profile Photo */}
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="h-48 w-48 overflow-hidden rounded-full ring-4 ring-secondary/20 ring-offset-4 ring-offset-background">
                      <Image
                        src="/profile/aprils-profile.jpeg"
                        alt="April Parker"
                        width={192}
                        height={192}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg ring-2 ring-primary/20">
                      120K+ Students
                    </div>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="mb-6 text-center">
                  <h2 className="mb-2 text-3xl font-bold text-foreground">April Parker</h2>
                  <p className="text-base text-muted-foreground">Lorem Ipsum & Dolor Sit Amet</p>
                </div>

                {/* Experience */}
                <p className="mb-6 text-center text-sm leading-relaxed text-muted-foreground">
                  12+ years lorem ipsum dolor sit amet consectetur adipiscing elit
                </p>

                {/* Core Expertise */}
                <div className="mb-6">
                  <h3 className="mb-4 text-lg font-bold text-foreground">Core Expertise</h3>
                  <ul className="space-y-2.5 text-sm text-foreground/80">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 text-secondary font-bold">•</span>
                      <span>Lorem Ipsum</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 text-secondary font-bold">•</span>
                      <span>Dolor Sit Amet</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 text-secondary font-bold">•</span>
                      <span>Consectetur</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 text-secondary font-bold">•</span>
                      <span>Adipiscing</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 text-secondary font-bold">•</span>
                      <span>Eiusmod Tempor</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 text-secondary font-bold">•</span>
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
                  <h3 className="mb-3 text-center text-sm font-bold text-foreground">Courses & Education</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Button variant="outline" size="sm" className="font-normal">
                      Udemy
                    </Button>
                    <Button variant="outline" size="sm" className="font-normal">
                      Coursera
                    </Button>
                    <Button variant="outline" size="sm" className="font-normal">
                      Codecademy
                    </Button>
                  </div>
                </div>

                {/* Social & Content */}
                <div>
                  <h3 className="mb-3 text-center text-sm font-bold text-foreground">Social & Content</h3>
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="sm" className="font-normal">
                      YouTube
                    </Button>
                    <Button variant="outline" size="sm" className="font-normal">
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
            <Card id="about" className="border-0 shadow-polished">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">About</CardTitle>
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
            <Card className="border-0 shadow-polished">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">Products Built</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Product 1 */}
                <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent transition-all hover:border-secondary/40 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-foreground">lorem.ipsum</h3>
                      <div className="text-right text-sm">
                        <div className="font-bold text-secondary">25K+ Users</div>
                        <div className="text-muted-foreground">5K+ Paid</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                    </p>
                  </CardContent>
                </Card>

                {/* Product 2 */}
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent transition-all hover:border-primary/40 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-foreground">dolor.sit</h3>
                      <div className="text-right text-sm">
                        <div className="font-bold text-primary">35K+ Users</div>
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
            <Card className="border-0 shadow-polished">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">Professional Background</CardTitle>
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
            <Card className="border-0 shadow-polished">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">Teaching & Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <div>
                      <span className="font-bold text-foreground">Udemy:</span> Lorem ipsum dolor sit amet
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <span className="font-bold text-foreground">Coursera:</span> Consectetur adipiscing elit
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💻</span>
                    <div>
                      <span className="font-bold text-foreground">Codecademy:</span> Sed do eiusmod tempor
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📺</span>
                    <div>
                      <span className="font-bold text-foreground">YouTube:</span> Incididunt ut labore
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🏢</span>
                    <div>
                      <span className="font-bold text-foreground">Bootcamps & Workshops:</span> Dolore magna aliqua ut enim
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <span className="font-bold text-foreground">Total Reach:</span> Minim veniam quis nostrud exercitation ullamco
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Trusted By Section */}
            <Card className="border-0 shadow-polished">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">Trusted By</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="lg" className="font-semibold">
                    Lorem Ipsum
                  </Button>
                  <Button variant="outline" size="lg" className="font-semibold">
                    Dolor Sit
                  </Button>
                  <Button variant="outline" size="lg" className="font-semibold">
                    Amet Corp
                  </Button>
                  <Button variant="outline" size="lg" className="font-semibold">
                    Consectetur
                  </Button>
                  <Button variant="outline" size="lg" className="font-semibold">
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
