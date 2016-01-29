import store from "./store";
import authAxios from "./authAxios";

export default () => {
  return `
  <form onsubmit="onLogin()">
    <fieldset>
      <label for="nameField">Name</label>
      <input type="text" placeholder="CJ Patoilo" id="nameField">
      <label for="commentField">Comment</label>
      <textarea placeholder="Hi CJ …" id="commentField"></textarea>
      <div class="example-send-yourself-copy">
        <input type="checkbox" id="confirmField">
        <label class="label-inline" for="confirmField">Send a copy to yourself</label>
      </div>
      <input class="button-primary" type="submit" value="Send">
    </fieldset>
  </form>
  `;
};

function onLogin() {
  store.authedAxios = axios.create({
    baseURL: 'https://api.github.com',
    auth: { username, password, }
  });
}
