import Nightmare  from 'nightmare';

describe('Visit home page', () => {
  it('welcome the user', async () => {
    let page = Nightmare().goto('http://localhost:3000');

    let text = await page.evaluate(() => (document.body.textContent)).end();

    expect(text).toContain('Thinknetica react course. React blog.');
  });
});

describe('Like post', () => {
  it('Like post on post page', async () => {
    let page = Nightmare({show: true}).goto('http://localhost:3000/posts/1');

    page
      .evaluate(() => (+document.querySelector('#like-btn-1').innerText.split(' ')[1])) // Return likes number
      .then((likesBefore) => {

        page
          .wait(1000)
          .click('#like-btn-1')
          .wait(500)
          .evaluate(() => ({likesAfter: +document.querySelector('#like-btn-1').innerText.split(' ')[1], isLiked: document.querySelector('#like-btn-1').className.indexOf('like__btn--liked') > -1}))
          .end()
          .then((info) => {
            let {likesAfter, isLiked} = info;
            expect(likesAfter).toEqual(isLiked ? likesBefore + 1 : likesBefore - 1);

          });
      });
  });
});