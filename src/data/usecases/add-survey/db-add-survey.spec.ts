import { DbAddSurvey } from './db-add-survey' 
import { AddSurveyModel, AddSurveyRepository } from './db-add-account-protocols'

const makeFakeSurveyData = (): AddSurveyModel => ({
    question: 'any_question',
    answers: [{
        image: 'any_image',
        answer: 'any_answer'
    }]
})

describe('DbAddSurvey UseCase', () => {
    test('Should call AddSurveyRepository with correct values', () => {
        class AddSurveyRepositoryStub implements AddSurveyRepository {
            async add (data: AddSurveyModel): Promise<void> {
                return new Promise(resolve => resolve())
            }
        }
        const addSurveyRepositoryStub = new AddSurveyRepositoryStub()
        const addSpy = jest.spyOn(addSurveyRepositoryStub, 'add')
        const sut = new DbAddSurvey(addSurveyRepositoryStub)
        const surveyData = makeFakeSurveyData()
        sut.add(surveyData)
        expect(addSpy).toHaveBeenCalledWith(surveyData)
    })
})