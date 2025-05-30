import { http, HttpResponse } from "msw";

let flags = [
  { id: "feature-a", name: "Feature A", enabled: true },
  { id: "feature-b", name: "Feature B", enabled: false },
];

export const handlers = [
  http.get("/api/flags", () => {
    return HttpResponse.json(flags);
  }),

  http.patch("/api/flags/:id", async ({ request, params }) => {
    const body = (await request.json()) as { enabled: boolean };

    // Mutate in-memory array
    flags = flags.map((flag) =>
      flag.id === params.id ? { ...flag, enabled: body.enabled } : flag
    );

    return HttpResponse.json({
      id: params.id,
      enabled: body.enabled,
    });
  }),
];
