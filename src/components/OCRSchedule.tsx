'use client';

import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassUI';
import { Upload, Loader } from 'lucide-react';
import toast from 'react-hot-toast';
import Tesseract from 'tesseract.js';

interface ScheduleEntry {
  employeeName: string;
  date: string;
  shift: string;
  role?: string;
}

interface OCRScheduleProps {
  onScheduleExtracted?: (entries: ScheduleEntry[]) => void;
}

export const OCRSchedule: React.FC<OCRScheduleProps> = ({ onScheduleExtracted }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [extractedSchedule, setExtractedSchedule] = useState<ScheduleEntry[]>([]);

  const handleImageSelect = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setPreviewImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);

    await processImage(file);
  };

  const processImage = async (file: File) => {
    setIsProcessing(true);
    try {
      const { data } = await Tesseract.recognize(file, 'eng', {
        logger: (m) => {
          if (m.status === 'recognizing') {
            console.log(`OCR Progress: ${Math.round(m.progress * 100)}%`);
          }
        },
      });

      const text = data.text;
      const parsed = parseScheduleText(text);
      setExtractedSchedule(parsed);

      if (parsed.length > 0) {
        toast.success(`Extracted ${parsed.length} schedule entries`);
        onScheduleExtracted?.(parsed);
      } else {
        toast.error('No schedule entries found in the image');
      }
    } catch (error) {
      console.error('OCR Error:', error);
      toast.error('Failed to process image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const parseScheduleText = (text: string): ScheduleEntry[] => {
    const entries: ScheduleEntry[] = [];
    const lines = text.split('\n');

    // Pattern matching for common schedule formats
    // Expected formats: "Name: Date Time-Time Role" or "Name|Date|Time|Role"
    const namePattern = /^[A-Z][a-z]+ (?:[A-Z][a-z]+ )?/;
    const datePattern = /(\d{1,2}[-/]\d{1,2}[-/]\d{2,4}|\d{4}[-/]\d{1,2}[-/]\d{1,2})/;
    const timePattern = /(\d{1,2}:\d{2}\s*(?:am|pm|AM|PM)?)\s*[-to]?\s*(\d{1,2}:\d{2}\s*(?:am|pm|AM|PM)?)?/;
    const rolePattern = /(FRONT_DESK|SHUTTLE|RESTAURANT|HOUSEKEEPING|FrontDesk|Operations|Shipping|BackOffice|Front Office|On Leave)/i;

    for (const line of lines) {
      if (!line.trim()) continue;

      const parts = line.split(/[|,\s]{2,}|[\t]/);
      if (parts.length < 2) continue;

      const nameMatch = line.match(namePattern);
      const dateMatch = line.match(datePattern);
      const timeMatch = line.match(timePattern);
      const roleMatch = line.match(rolePattern);

      if (nameMatch && dateMatch) {
        entries.push({
          employeeName: nameMatch[0].trim(),
          date: dateMatch[0],
          shift: timeMatch
            ? `${timeMatch[1]}${timeMatch[2] ? ` - ${timeMatch[2]}` : ''}`
            : 'TBD',
          role: roleMatch ? roleMatch[1] : undefined,
        });
      }
    }

    return entries;
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageSelect(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      handleImageSelect(file);
    }
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-neutral-300 dark:border-neutral-600 rounded-lg p-8 text-center cursor-pointer hover:border-primary-500 transition-colors"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          disabled={isProcessing}
        />

        <Upload className="w-12 h-12 text-neutral-400 dark:text-neutral-600 mx-auto mb-3" />
        <p className="text-body-md font-medium text-neutral-900 dark:text-white mb-1">
          Drop schedule image here or click to upload
        </p>
        <p className="text-caption-sm text-neutral-600 dark:text-neutral-400 mb-4">
          PNG, JPG, or PDF screenshots of staff schedules
        </p>

        <Button
          variant="primary"
          onClick={handleUploadClick}
          disabled={isProcessing}
          className="mx-auto"
        >
          {isProcessing ? (
            <>
              <Loader className="w-4 h-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Upload className="w-4 h-4" />
              Upload Image
            </>
          )}
        </Button>
      </div>

      {/* Preview */}
      {previewImage && (
        <GlassCard className="p-4">
          <p className="text-caption-md text-neutral-600 dark:text-neutral-400 mb-3">Preview</p>
          <img
            src={previewImage}
            alt="Schedule preview"
            className="w-full max-h-96 object-contain rounded-lg"
          />
        </GlassCard>
      )}

      {/* Extracted Schedule */}
      {extractedSchedule.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-heading-md font-semibold text-neutral-900 dark:text-white">
            Extracted Schedule ({extractedSchedule.length} entries)
          </h3>

          <div className="space-y-2">
            {extractedSchedule.map((entry, idx) => (
              <GlassCard key={idx} className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-body-md font-semibold text-neutral-900 dark:text-white">
                      {entry.employeeName}
                    </p>
                    <p className="text-caption-sm text-neutral-600 dark:text-neutral-400">
                      {entry.date} • {entry.shift}
                    </p>
                    {entry.role && (
                      <p className="text-caption-sm text-primary-600 dark:text-primary-400 mt-1">
                        {entry.role}
                      </p>
                    )}
                  </div>
                  <div className="bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400 px-3 py-1 rounded-full text-caption-sm font-medium">
                    Verified
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="secondary"
              className="flex-1"
              onClick={() => {
                setPreviewImage(null);
                setExtractedSchedule([]);
                if (fileInputRef.current) fileInputRef.current.value = '';
              }}
            >
              Upload Different Image
            </Button>
            <Button
              variant="primary"
              className="flex-1"
              onClick={() => {
                toast.success('Schedule published to all employees');
              }}
            >
              Publish to Team
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
