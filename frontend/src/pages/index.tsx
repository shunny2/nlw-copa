import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'
import usersAvatarExampleImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'

import { FormEvent, useState } from 'react'
import { api } from '../lib/axios'
import { getCounts } from '../lib/getCounts'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

interface HomeProps {
    pollCount: number;
    guessCount: number;
    userCount: number;
}

export default function Home({ pollCount, guessCount, userCount }: HomeProps) {
    const [pollTitle, setPollTitle] = useState('')

    async function createPoll(event: FormEvent) {
        event.preventDefault()

        try {
            const response = await api.post('polls', {
                title: pollTitle
            })

            const { code } = response.data

            navigator.clipboard.writeText(code)

            setPollTitle('')

            toast.success("Bolão criado com sucesso, o código foi copiado para área de transferência!")
        } catch (error) {
            console.log(error)
            toast.error("Falha ao criar o bolão, tente novamente!")
        }
    }

    return (
        <>
            <div className='max-w-[1124px] h-screen mx-auto p-4 md:p-0 grid grid-cols-2 gap-28 items-center'>
                <main className='col-span-2 md:col-span-1'>
                    <Image className='mx-auto md:mx-0' src={logoImg} alt="NLW - Copa" />

                    <h1 className='mt-14 text-white text-4xl md:text-5xl font-bold leading-tight'>
                        Crie seu próprio bolão da copa e compartilhe entre amigos!
                    </h1>

                    <div className='mt-10 flex items-center gap-2'>
                        <Image src={usersAvatarExampleImg} alt="" />

                        <strong className='text-gray-100 text-xl'>
                            <span className='text-ignite-500'>+{userCount}</span>&nbsp;
                            {userCount > 1 ? 'pessoas já estão usando' : 'pessoa já está usando'}
                        </strong>
                    </div>

                    <form onSubmit={createPoll} className='mt-10 flex gap-2'>
                        <input
                            className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100'
                            type="text"
                            required
                            placeholder='Qual o nome do seu bolão?'
                            onChange={event => setPollTitle(event.target.value)}
                            value={pollTitle}
                        />
                        <button
                            className='bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700 transition ease-in-out delay-150'
                            type='submit'
                        >
                            Criar meu bolão
                        </button>
                    </form>

                    <p className='mt-4 text-gray-300 text-[12px] md:text-sm leading-relaxed'>
                        Após criar seu bolão, você receberá um código único que <br />
                        poderá usar para convidar outras pessoas 🚀
                    </p>

                    <div className='mt-10 pt-10 border-t border-gray-600 text-gray-100 flex items-center justify-between'>
                        <div className='flex items-center gap-6'>
                            <Image src={iconCheckImg} alt="" />
                            <div className='flex flex-col'>
                                <span className='font-bold text-2xl'>+{pollCount}</span>
                                <span className='text-base'>Bolões criados</span>
                            </div>
                        </div>

                        <div className='w-px h-14 bg-gray-600' />

                        <div className='flex items-center gap-6'>
                            <Image src={iconCheckImg} alt="" />
                            <div className='flex flex-col'>
                                <span className='font-bold text-2xl'>+{guessCount}</span>
                                <span className='text-base'>Palpites enviados</span>
                            </div>
                        </div>
                    </div>
                </main>

                <Image
                    className='col-span-2 md:col-span-1'
                    src={appPreviewImg}
                    alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa"
                    priority
                />
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export const getStaticProps = async () => {
    const { pollCountResponse, guessCountResponse, userCountResponse } = await getCounts()
    
    return {
        props: {
            pollCount: pollCountResponse.data.count,
            guessCount: guessCountResponse.data.count,
            userCount: userCountResponse.data.count
        }
    }
}
