import { createEvent } from "effector";
import { $form } from "./store";
import { Payload } from "./types";

const setText = createEvent<Payload>();

$form.on<Payload>(setText, (state, payload) => {
  console.log('state', state);
  console.log('payload input', payload.textInput);
  console.log('payload', payload);
  return {
    ...state
  }
})

export { setText };