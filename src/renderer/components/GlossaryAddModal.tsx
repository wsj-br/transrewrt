import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ExternalLink } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { glossaryApi } from "../services/apiService";

interface GlossaryAddModalProps {
  open: boolean;
  onClose: () => void;
  sourceLanguage: string | null;
  targetLanguage: string | null;
  prefillSourceText?: string;
  prefillTargetText?: string;
  onSaved?: () => void;
  onOpenSettings?: () => void;
}

function GlossaryAddModal({
  open,
  onClose,
  sourceLanguage,
  targetLanguage,
  prefillSourceText = "",
  prefillTargetText = "",
  onSaved,
  onOpenSettings,
}: GlossaryAddModalProps) {
  const { t } = useTranslation();
  const [srcLang, setSrcLang] = useState(sourceLanguage || "");
  const [tgtLang, setTgtLang] = useState(targetLanguage || "");
  const [srcText, setSrcText] = useState(prefillSourceText);
  const [tgtText, setTgtText] = useState(prefillTargetText);
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setSrcLang(sourceLanguage || "");
      setTgtLang(targetLanguage || "");
      setSrcText(prefillSourceText || "");
      setTgtText(prefillTargetText || "");
      setSavedMsg(null);
      setErrorMsg(null);
    }
  }, [open, sourceLanguage, targetLanguage, prefillSourceText, prefillTargetText]);

  const handleSave = async () => {
    if (!srcLang || !tgtLang || !srcText.trim() || !tgtText.trim()) {
      setErrorMsg(t("All fields are required."));
      return;
    }
    setSaving(true);
    setErrorMsg(null);
    setSavedMsg(null);
    try {
      const res = (await glossaryApi.create({
        source_language: srcLang,
        target_language: tgtLang,
        source_text: srcText.trim(),
        target_text: tgtText.trim(),
      })) as { updated?: boolean } | undefined;
      setSavedMsg(res?.updated ? t("Term updated.") : t("Term saved."));
      onSaved?.();
    } catch (err) {
      setErrorMsg(err?.message || t("Failed to save term."));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{t("Add to Glossary")}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label>{t("Source language")}</Label>
              <LanguageSelector
                label={t("Source language")}
                hideLabel
                value={srcLang || ""}
                onChange={setSrcLang}
                targetListSameAsSource={true}
                detectLanguage={false}
                allowAllLanguages
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>{t("Target language")}</Label>
              <LanguageSelector
                label={t("Target language")}
                hideLabel
                value={tgtLang || ""}
                onChange={setTgtLang}
                targetListSameAsSource={true}
                detectLanguage={false}
                allowAllLanguages
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>{t("Source term")}</Label>
            <textarea
              className="min-h-[64px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-y focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              value={srcText}
              onChange={(e) => setSrcText(e.target.value)}
              placeholder={t("Term in source language…")}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>{t("Target term")}</Label>
            <textarea
              className="min-h-[64px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-y focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              value={tgtText}
              onChange={(e) => setTgtText(e.target.value)}
              placeholder={t("Term in target language…")}
            />
          </div>
          {savedMsg && <p className="text-sm text-emerald-500">{savedMsg}</p>}
          {errorMsg && <p className="text-sm text-destructive">{errorMsg}</p>}
        </div>
        <DialogFooter className="flex items-center justify-between sm:justify-between">
          <Button
            variant="link"
            size="sm"
            className="gap-1 text-muted-foreground hover:text-foreground px-0"
            onClick={() => { onClose(); onOpenSettings?.(); }}
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {t("Manage glossary")}
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose} disabled={saving}>
              {t("Close")}
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? t("Saving…") : t("Save")}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default GlossaryAddModal;
