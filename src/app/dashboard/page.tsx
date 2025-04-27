"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { PageLayout } from "../../components/layout/PageLayout";

export default function DashboardPage() {
  return (
    <PageLayout title="Dashboard">
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to your dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              magnam, nulla, similique, ut itaque cumque placeat est reiciendis
              molestias ab aspernatur velit alias molestiae. Tenetur maxime
              assumenda necessitatibus deserunt dicta.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam, veritatis! Ipsam voluptatem adipisci reiciendis placeat
                dolore provident inventore, fuga tempora quidem magni, suscipit
                pariatur tempore animi odio alias? Pariatur, laboriosam.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>more content...</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                maxime tempore, eveniet maiores vero enim quos eos veritatis
                facilis quod fugiat soluta obcaecati, amet sint quibusdam est
                nobis unde voluptates.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
