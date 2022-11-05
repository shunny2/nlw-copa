import 'fastify'

declare module 'fastify' {
    interface FastifyInstance {
        config: { 
            PORT: number;
            JWT_SECRET: string;
            JWT_REFRESH_SECRET: string;
        };
    }
}