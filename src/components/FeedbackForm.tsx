import { useNotifications } from "@ouestware/notifications";
import { FC, useEffect, useMemo, useState } from "react";

import { useAppContext } from "../core/context.ts";
import { translate } from "../utils/translation.ts";

const DEFAULT_STATE = { feedback: "", checked: false };

export const FeedbackForm: FC<{
  bgColor: string;
  textColor: string;
  baseURL: string;
  basePayload: {
    url: string;
    "page type": string;
    "topic id"?: string;
  };
}> = ({ baseURL, basePayload, textColor, bgColor }) => {
  const { notify } = useNotifications();
  const { language } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<{ feedback: string; checked: boolean }>(DEFAULT_STATE);
  const isDisabled = useMemo(
    () => !state.checked || !state.feedback || loading,
    [loading, state.checked, state.feedback],
  );

  useEffect(() => {
    setState(DEFAULT_STATE);
  }, [basePayload.url]);

  return (
    <form
      className="mb-4 position-relative"
      onSubmit={(e) => {
        e.preventDefault();
        if (isDisabled) return;

        setLoading(true);
        fetch(`${baseURL}/create-record`, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          body: JSON.stringify({
            ...basePayload,
            dev: import.meta.env.MODE === "development",
            verbatim: state.feedback,
          }),
        })
          .then((res) => {
            if (res.ok) {
              notify({
                type: "success",
                title: (
                  <span className="text-success">
                    {translate(
                      {
                        en: "Success!",
                        da: "Succes!",
                      },
                      language,
                    )}
                  </span>
                ),
                text: translate(
                  {
                    en: "Thanks a lot for your feedback.",
                    da: "Mange tak for din feedback.",
                  },
                  language,
                ),
              });
              setState(DEFAULT_STATE);
            } else {
              console.error(res);
              notify({
                type: "error",
                title: (
                  <span className="text-danger">
                    {translate(
                      {
                        en: "Something went wrong...",
                        da: "Noget gik galt...",
                      },
                      language,
                    )}
                  </span>
                ),
                text: translate(
                  {
                    en: "Unfortunately, your comment could not have been submitted. Sorry for that. Maybe try again later?",
                    da: "Desværre kunne din kommentar ikke indsendes. Beklager dette. Måske prøv igen senere?",
                  },
                  language,
                ),
              });
            }
          })
          .catch((err) => {
            console.error(err);
            notify({
              type: "error",
              title: (
                <span className="text-danger">
                  {translate(
                    {
                      en: "Something went wrong...",
                      da: "Noget gik galt...",
                    },
                    language,
                  )}
                </span>
              ),
              text: translate(
                {
                  en: "Unfortunately, your comment could not have been submitted. Sorry for that. Maybe try again later?",
                  da: "Desværre kunne din kommentar ikke indsendes. Beklager dette. Måske prøv igen senere?",
                },
                language,
              ),
            });
          })
          .finally(() => {
            setLoading(false);
          });
      }}
    >
      <h4>
        {translate(
          {
            en: "What's your opinion on that matter?",
            da: "Hvad er din mening om den sag?",
          },
          language,
        )}
      </h4>
      <textarea
        className="form-control bg-light-blue mb-2"
        rows={3}
        value={state.feedback}
        placeholder={translate(
          { en: "I want to react to this page because...", da: "Jeg vil gerne reagere på denne side fordi..." },
          language,
        )}
        onChange={(e) => setState({ ...state, feedback: e.target.value })}
      ></textarea>
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="user-validation"
          checked={state.checked}
          onChange={(e) => setState({ ...state, checked: e.target.checked })}
        />
        <label className="form-check-label fst-italic" htmlFor="user-validation">
          {translate(
            {
              en: (
                <>
                  I understand that my comment is for <strong>public consumption</strong>, and should not contain any
                  private or sensible information.
                </>
              ),
              da: (
                <>
                  Jeg forstår, at min kommentar er til <strong>offentligt brug</strong>, og bør ikke indeholde private
                  eller følsomme oplysninger.
                </>
              ),
            },
            language,
          )}
        </label>
      </div>
      <div className="text-end">
        <button type="submit" className={`btn btn-${textColor}`} disabled={isDisabled}>
          {translate({ en: "Submit comment", da: "Indsend kommentar" }, language)}
        </button>
      </div>
      {loading && (
        <div
          className={`position-absolute inset-0 d-flex align-items-center justify-content-center bg-${bgColor} opacity-50`}
        >
          <div className={`spinner-border text-${textColor}`} role="status">
            <span className="visually-hidden">Loading</span>
          </div>
        </div>
      )}
    </form>
  );
};
