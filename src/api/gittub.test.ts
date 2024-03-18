import axios from "axios";
import gitApi from "./github";

jest.mock('axios')

const axiosMock = axios as jest.Mocked<typeof axios>

describe('github', () => {
    it('De retornar login e id do usuário', async () => {
        axiosMock.get = jest.fn().mockResolvedValue({
            data: {
                login: 'ClaytonEduard',
                id: 11823640
            }
        })
        const response = await gitApi.getUser('ClaytonEduard')
        expect(response).toMatchObject({
            login: 'ClaytonEduard',
            id: 11823640
        })
    })

    it('Deve retornar a mensagem de usuário não encontrado', async () => {
        axiosMock.get = jest.fn().mockResolvedValue({
            data: {
                message: 'Not Found'
            }
        })
        const reposnse = await gitApi.getUser('usuario-invalido')
        expect(reposnse).toMatchObject({ message: 'Not found' })
    })
})