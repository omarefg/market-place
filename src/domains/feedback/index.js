import * as components from "./components";
import FeedbackProvider, { FeedbackContext } from "./adapters/FeedbackProvider";
import handlersBuilder from "./handlers/feedbackHandlers";
import { withDomainBuilder } from "hocs";
import utils from "utils";
import { useContext } from "react";

export default withDomainBuilder({
  utils,
  hocName: "WithFeedbackComponent",
  context: FeedbackContext,
  domainAdapterPropName: "useFeedback",
  Provider: FeedbackProvider,
  handlersBuilder,
  useContext: useContext,
  components,
});
