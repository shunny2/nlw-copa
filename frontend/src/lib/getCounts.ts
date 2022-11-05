import { api } from './axios'

export async function getCounts() {

    const [pollCountResponse, guessCountResponse, userCountResponse] = await Promise.all([
        api.get('polls/count'),
        api.get('guesses/count'),
        api.get('users/count')
    ])

    return { pollCountResponse, guessCountResponse, userCountResponse }
}