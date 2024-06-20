import { Design as TDesign } from "../api/design/Design";

export const DESIGN_TITLE_FIELD = "title";

export const DesignTitle = (record: TDesign): string => {
  return record.title?.toString() || String(record.id);
};
