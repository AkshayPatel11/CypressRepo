import FeedbackPage from '../../Page-Objects/Pages/FeedBackPage'

describe ('Feedback Test using fixtures',()=>{

    before (function (){
        FeedbackPage.load()
    })

    it('Should submit feedback form',function()
    {
        FeedbackPage.submitFeedback()
    })

})