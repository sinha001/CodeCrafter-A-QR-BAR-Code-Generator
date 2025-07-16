'use client';

import { Badge } from '@/components/ui/badge';
import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  QrCode,
  Barcode,
  Download,
  Sparkles,
  Zap,
  Shield,
  Smartphone,
} from 'lucide-react';
import QRCode from 'qrcode';
import JsBarcode from 'jsbarcode';
import { Button } from './components/ui/button';
import { CodeCraftLogoWithText } from "@/components/logo"


export default function QRBarCodeGenerator() {
  const [qrText, setQrText] = useState('');
  const [qrType, setQrType] = useState('text');
  const [barcodeText, setBarcodeText] = useState('');
  const [barcodeFormat, setBarcodeFormat] = useState('CODE128');
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [barcodeDataUrl, setbarcodeDataUrl] = useState('');
  const qrCanvasRef = useRef<HTMLCanvasElement>(null);
  const barcodeCanvasRef = useRef<HTMLCanvasElement>(null);

  //Generate QR CODE...
  useEffect(() => {
    if (qrText) {
      const canvas = qrCanvasRef.current;
      if (canvas) {
        QRCode.toCanvas(
          canvas,
          qrText,
          {
            width: 256,
            margin: 2,
            color: {
              dark: '#1f2937',
              light: '#ffffff',
            },
          },
          (error: any) => {
            if (!error) {
              setQrDataUrl(canvas.toDataURL());
            }
          }
        );
      }
    }
  }, [qrText]);

  //Generate BarCode...
  useEffect(() => {
    if (barcodeText) {
      const canvas = barcodeCanvasRef.current;
      if (canvas) {
        try {
          JsBarcode(canvas, barcodeText, {
            format: barcodeFormat,
            width: 2,
            height: 100,
            displayValue: true,
            fontSize: 14,
            textMargin: 8,
          });
          setbarcodeDataUrl(canvas.toDataURL());
        } catch (error) {
          console.error('Barcode generation error:', error);
        }
      }
    }
  }, [barcodeText, barcodeFormat]);

  const downloadImage = (dataUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.click();
  };

  const formatQRText = (type: string, text: string) => {
    switch (type) {
      case 'url':
        return text.startsWith('http') ? text : `https://${text}`;
      case 'email':
        return `mailto:${text}`;
      case 'phone':
        return `tel:${text}`;
      case 'sms':
        return `sms:${text}`;
      case 'wifi':
        return `WIFI:T:WPA;S:${text};P:password;;`;
      default:
        return text;
    }
  };

  const handleQRTextChange = (value: string) => {
    setQrText(formatQRText(qrType, value));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CodeCraftLogoWithText size={32} textSize="text-xl" />
            </div>
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-emerald-200">
              Free &amp; Unlimited
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
              Generate QR Codes &amp; Barcode
              <span className="block text-3xl lg:text-5xl mt-2">
                Instantly &amp; Free
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Create professional QR Codes &amp; Barcodes in seconds. Perfect
              for businesses, events, and personal use. No registration
              required.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium">High Quality</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border">
                <Zap className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium">Instant Generation</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium">Privacy First</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Generator */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="qr" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-white shadow-sm border">
                <TabsTrigger
                  value="qr"
                  className="flex items-center space-x-2 data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700"
                >
                  <QrCode className="w-4 h-4" />
                  <span>QR Code Generator</span>
                </TabsTrigger>
                <TabsTrigger
                  value="barcode"
                  className="flex items-center space-x-2 data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700"
                >
                  <Barcode className="w-4 h-4" />
                  <span>Barcode Generator</span>
                </TabsTrigger>
              </TabsList>

              {/* QR Code Generator */}
              <TabsContent value="qr">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <QrCode className="w-5 h-5 text-emerald-600" />
                        <span>QR Code Settings</span>
                      </CardTitle>
                      <CardDescription>
                        Customize your QR Code content &amp; types
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="qr-type">QR Code Type</Label>
                        <Select value={qrType} onValueChange={setQrType}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-white/100">
                            <SelectItem value="text">Plain Text</SelectItem>
                            <SelectItem value="url">Website URL</SelectItem>
                            <SelectItem value="email">Email Address</SelectItem>
                            <SelectItem value="phone">Phone Number</SelectItem>
                            <SelectItem value="sms">SMS Message</SelectItem>
                            <SelectItem value="wifi">WiFi Network</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="qr-content">Content</Label>
                        {qrType === 'text' || qrType === 'wifi' ? (
                          <Textarea
                            id="qr-content"
                            placeholder={
                              qrType === 'wifi'
                                ? 'Enter WiFi network name'
                                : 'Enter your text content'
                            }
                            value={
                              qrType === 'text'
                                ? qrText
                                : qrText
                                    .replace('WIFI:T:WPA;S:', '')
                                    .replace(';P:password;;', '')
                            }
                            onChange={(e) => handleQRTextChange(e.target.value)}
                            className="min-h-[100px] resize-none"
                          />
                        ) : (
                          <Input
                            id="qr-content"
                            placeholder={
                              qrType === 'url'
                                ? 'https://example.com'
                                : qrType === 'email'
                                ? 'user@example.com'
                                : qrType === 'phone'
                                ? '+1234567890'
                                : qrType === 'sms'
                                ? '+1234567890'
                                : 'Enter content'
                            }
                            value={
                              qrType === 'url'
                                ? qrText.replace('https://', '')
                                : qrType === 'email'
                                ? qrText.replace('mailto:', '')
                                : qrType === 'phone'
                                ? qrText.replace('tel:', '')
                                : qrType === 'sms'
                                ? qrText.replace('sms:', '')
                                : qrText
                            }
                            onChange={(e) => handleQRTextChange(e.target.value)}
                          />
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Preview &amp; Download</CardTitle>
                      <CardDescription>
                        Your QR Code will appear here
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      {qrText ? (
                        <>
                          <div className="flex justify-center">
                            <canvas
                              ref={qrCanvasRef}
                              className="border rounded-lg shadow-sm bg-white"
                            />
                          </div>
                          <Button
                            onClick={() =>
                              downloadImage(qrDataUrl, 'qrcode.png')
                            }
                            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                            disabled={!qrDataUrl}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download QR Code
                          </Button>
                        </>
                      ) : (
                        <div className="py-16 text-gray-400">
                          <QrCode className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p>Enter content to generate QR code</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* BarCode Generator */}
              <TabsContent value="barcode">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <QrCode className="w-5 h-5 text-emerald-600" />
                        <span>Barcode Settings</span>
                      </CardTitle>
                      <CardDescription>
                        Configure your Barcode format &amp; content &amp; types
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="qr-type">Barcode Format</Label>
                        <Select
                          value={barcodeFormat}
                          onValueChange={setBarcodeFormat}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="CODE128">CODE128</SelectItem>
                            <SelectItem value="CODE39">CODE39</SelectItem>
                            <SelectItem value="EAN13">EAN13</SelectItem>
                            <SelectItem value="EAN8">EAN8</SelectItem>
                            <SelectItem value="UPC">UPC</SelectItem>
                            <SelectItem value="ITF14">ITF14</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="barcode-content">Barcode Content</Label>

                        <Input
                          id="barcode-content"
                          placeholder="Enter Text or Numbers"
                          value={barcodeText}
                          onChange={(e) => setBarcodeText(e.target.value)}
                        />
                        <p className="text-xs text-gray-500">
                          {barcodeFormat === 'EAN13' &&
                            'Enter 12 digits (13th is calculated)'}
                          {barcodeFormat === 'EAN8' &&
                            'Enter 7 digits (8th is calculated)'}
                          {barcodeFormat === 'UPC' &&
                            'Enter 11 digits (12th is calculated)'}
                          {!['EAN13', 'EAN8', 'UPC'].includes(barcodeFormat) &&
                            'Enter alphanumeric text'}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Preview &amp; Download</CardTitle>
                      <CardDescription>
                        Your Barcode will appear here
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      {barcodeText ? (
                        <>
                          <div className="flex justify-center">
                            <canvas
                              ref={barcodeCanvasRef}
                              className="border rounded-lg shadow-sm bg-white"
                            />
                          </div>
                          <Button
                            onClick={() =>
                              downloadImage(barcodeDataUrl, 'barcode.png')
                            }
                            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                            disabled={!barcodeDataUrl}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download Barcode
                          </Button>
                        </>
                      ) : (
                        <div className="py-16 text-gray-400">
                          <QrCode className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p>Enter content to generate Barcode</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Why Choose CodeCraft?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional-grade QR Codes &amp; barcodes with the modern design
              and powerful featues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center border-0 shadow-sm bg-white/80">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">Lighting Fast</h3>
                <p className="text-sm text-gray-600">
                  Generate Codes instantly with real-time preview
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm bg-white/80">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">Mobile Optimized</h3>
                <p className="text-sm text-gray-600">
                  Perfect experience on all devices &amp; screen sizes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm bg-white/80">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">Privacy First</h3>
                <p className="text-sm text-gray-600">
                  All processing happens locally in your browser
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm bg-white/80">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">High Quality</h3>
                <p className="text-sm text-gray-600">
                  Professional-grade output ready for print
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
              <CodeCraftLogoWithText size={32} textSize="text-xl" className="justify-center" />
            </div>
            <p className="text-gray-400 mb-6">
              Free QR Codes &amp; BarCode Generator - Create Professional Codes
              in seconds
            </p>
            <p className="text-sm text-gray-500">
              &copy; 2025 Nishant Sinha. All Right Reserved. Made with ❤️ for
              creators worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
