import { connectClient } from "./ekoClient";

import Input from "./Input";

function NameInput() {
  return <Input placeholder="Enter your name." onInput={connectClient} />;
}

export default NameInput;