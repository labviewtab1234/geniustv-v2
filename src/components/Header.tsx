import { useState } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

const getNavigationItems = (t: (key: string) => string) => [
  { href: '/', label: t('nav.home') },
  { href: '/apps', label: t('nav.apps') },
  { href: '/blog', label: t('nav.blog') },
  { href: '/reseller', label: t('nav.reseller') },
  { href: '/faq', label: t('nav.faq') },
  { href: '/contact', label: t('nav.contact') },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];
  const navigationItems = getNavigationItems(t);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="GeniusTV Logo"
              width={180} height={140} />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8">
                  <Globe className="w-4 h-4 mr-2" />
                  {/* <span className="mr-1">{currentLanguage.flag}</span> */}
                  <span className="text-sm">{currentLanguage.code.toUpperCase()}</span>
                  <ChevronDown className="w-3 h-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as Language)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* <Button className="bg-primary hover:bg-primary/90">
              {t('header.startNow')}
            </Button> */}
          </div>

          <div className="md:hidden">
            <DropdownMenu >
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    {/*<span className="mr-2">{currentLanguage.flag}</span>*/}
                    {currentLanguage.code}
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => setLanguage(lang.code as Language)}
                        className="cursor-pointer"
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border mt-2 pt-4 pb-4 space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border">
              {/*<Button className="w-full bg-primary hover:bg-primary/90 mb-4">*/}
              {/*  {t('header.startNow')}*/}
              {/*</Button>*/}
              
              {/* Mobile Language Selector */}

            </div>


          </div>
        )}

      </div>
    </header>
  );
};