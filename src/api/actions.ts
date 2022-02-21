import { API, ApiActionPayload, ApiAction } from "./types";

const apiAction = ({
    apiEndpoint,
    data = null,
    onSuccess,
    onFailure,
    label
}: ApiActionPayload): ApiAction => ({
    type: API,
    payload: {
      apiEndpoint, 
      data, 
      onSuccess,
      onFailure,
      label
    }
})

export default apiAction


