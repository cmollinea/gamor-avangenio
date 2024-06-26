import { Link } from "@tanstack/react-router";
import { categoriesContent } from "../../content/home-content";
import { Arrow } from "../icons";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const TrendingCategories = () => {
  return (
    <section className="flex w-full flex-col space-y-10 pb-24 max-md:px-10">
      <h2 className="text-3xl font-bold">Trending Categories</h2>

      <div className="grid w-full grid-cols-1 place-items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categoriesContent.map((item, index) => (
          <Link
            aria-label={`dicover ${item.category} games`}
            resetScroll={false}
            key={item.category}
            className="group relative w-full max-w-lg overflow-hidden rounded-xl shadow-md xl:max-w-[365px]"
            from="/"
            to="/search"
            search={{ category: item.category.toLowerCase() }}
          >
            <Card className="">
              <div
                style={{ backgroundImage: `url(${item.thumbnail})` }}
                className="absolute inset-0 z-10 rounded-2xl bg-cover bg-no-repeat transition-transform ease-in-out group-hover:scale-110"
              />
              <span className="absolute inset-0 z-20 bg-card-background transition-colors ease-in-out group-hover:bg-primary/60" />
              <CardHeader className="relative z-30 px-6">
                <CardTitle className="text-2xl">
                  <span className="text-primary">/</span>
                  {index + 1}.
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-30 px-10 pt-0 font-bold">
                {item.category}
              </CardContent>
            </Card>
            <span className="absolute bottom-4 right-8 z-20 opacity-0 transition-all ease-in-out group-hover:right-4 group-hover:opacity-100">
              <Arrow />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
