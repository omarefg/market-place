import * as handlers from "./feedbackHandlers";

export default function feedbackHandlersBuilder(params) {
  return {
    handleSetTextModalMessage:
      handlers.handleSetTextModalMessageBuilder(params),
    handleCloseTextModal: handlers.handleCloseTextModalBuilder(params),
  };
}
