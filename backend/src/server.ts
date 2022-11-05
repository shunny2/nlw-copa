import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import env from '@fastify/env'

import { authRoutes } from './routes/auth'
import { gameRoutes } from './routes/game'
import { guessRoutes } from './routes/guess'
import { pollRoutes } from './routes/poll'
import { userRoutes } from './routes/user'

async function bootstrap() {
    const fastify = Fastify({
        logger: true
    })
    
    await fastify.register(cors, {
        origin: true
    })

    const schema = {
        type: 'object',
        required: ['PORT', 'JWT_SECRET'],
        properties: {
            PORT: {
                type: 'string',
                default: 3000
            },
            JWT_SECRET: {
                type: 'string',
                default: 'supersecret'
            }
        }
    }

    const options = {
        confKey: 'config',
        schema: schema,
        dotenv: true,
        data: process.env
    }

    await fastify.register(env, options)

    const { PORT, JWT_SECRET } = fastify.config

    await fastify.register(jwt, {
        secret: JWT_SECRET
    })

    await fastify.register(authRoutes)
    await fastify.register(gameRoutes)
    await fastify.register(guessRoutes)
    await fastify.register(pollRoutes)
    await fastify.register(userRoutes)

    await fastify.listen({ port: PORT, host: '0.0.0.0' })
}

bootstrap()