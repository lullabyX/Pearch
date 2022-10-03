import axios from "axios";
import { Dispatch } from "redux";
import {
  repositoriesActions,
  repositoriesStateType,
} from "../slices/repositories-slice";
import { uiActions } from "../slices/ui-slice";

export const searchRepositories = (text: string) => {
  return async (dispatch: Dispatch) => {
    const fetchRepositories = async (term: string) => {
      dispatch(repositoriesActions.update([]));
      dispatch(uiActions.setLoading());
      const { data } = await axios.get(
        "https://registry.npmjs.com/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const repositories: repositoriesStateType = data.objects.map(
        (object: { package: { name: string; description: string } }) => {
          return {
            name: object.package.name,
            description: object.package.description,
          };
        }
      );
      return repositories;
    };

    try {
      const repositories = await fetchRepositories(text);
      dispatch(repositoriesActions.update(repositories));
      dispatch(uiActions.finishLoading());
    } catch (error) {
      dispatch(uiActions.finishLoading());
      if (error instanceof Error) {
        dispatch(uiActions.hasError(error.message));
      }
    }
  };
};
