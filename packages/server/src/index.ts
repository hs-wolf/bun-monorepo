import { User } from '@bun-monorepo/models'

const user: User = new User('1', 'hswolf')

Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    return new Response(`Hello World! ${user.username}`);
  },
  port: process.env.PORT || 3000,
});