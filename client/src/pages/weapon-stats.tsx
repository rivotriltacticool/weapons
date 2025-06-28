import { useState, useEffect, useMemo } from "react";
import { tacticoolWeapons as weaponsData, weaponCategories } from "@/data/tacticool-weapons";
import { Weapon } from "@shared/schema";

export default function WeaponStats() {
  const [currentCategory, setCurrentCategory] = useState("Assault Rifle");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [language, setLanguage] = useState<"pt" | "en">("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGlobalSearch, setIsGlobalSearch] = useState(false);

  // Busca global em todas as categorias
  const globalSearchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    const results: { weapon: Weapon; category: string }[] = [];
    Object.entries(weaponsData).forEach(([category, weapons]) => {
      weapons.forEach(weapon => {
        if (weapon.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          results.push({ weapon, category });
        }
      });
    });
    return results;
  }, [searchTerm]);

  const filteredWeapons = useMemo(() => {
    if (isGlobalSearch && searchTerm.trim()) {
      return globalSearchResults.map(result => result.weapon);
    }
    
    const categoryWeapons = weaponsData[currentCategory] || [];
    if (!searchTerm.trim()) return categoryWeapons;
    
    return categoryWeapons.filter(weapon =>
      weapon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [currentCategory, searchTerm, isGlobalSearch, globalSearchResults]);

  const currentWeapon = filteredWeapons[currentIndex];

  useEffect(() => {
    setCurrentIndex(0);
  }, [currentCategory, searchTerm]);

  useEffect(() => {
    // Ativar busca global quando há termo de busca
    if (searchTerm.trim()) {
      setIsGlobalSearch(true);
    } else {
      setIsGlobalSearch(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          navigateWeapon(-1);
          break;
        case "ArrowRight":
          e.preventDefault();
          navigateWeapon(1);
          break;
        case "Escape":
          setSearchTerm("");
          setIsMobileMenuOpen(false);
          setIsGlobalSearch(false);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, filteredWeapons.length]);

  const navigateWeapon = (direction: number) => {
    if (filteredWeapons.length === 0) return;
    
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = filteredWeapons.length - 1;
    if (newIndex >= filteredWeapons.length) newIndex = 0;
    
    setCurrentIndex(newIndex);
  };

  const selectCategory = (category: string) => {
    setCurrentCategory(category);
    setSearchTerm("");
    setIsMobileMenuOpen(false);
    setIsGlobalSearch(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setIsGlobalSearch(true);
    }
  };

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className="fas fa-star text-yellow-400 text-xs sm:text-sm mr-0.5" />
    ));
  };

  const renderWeaponIndicators = () => {
    return Array.from({ length: Math.min(filteredWeapons.length, 10) }, (_, i) => (
      <div
        key={i}
        className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
          i === currentIndex ? "bg-tacticool-accent" : "bg-white/30"
        }`}
      />
    ));
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case "comum":
        return "text-gray-400";
      case "incomum":
        return "text-blue-400";
      case "raro":
        return "text-purple-400";
      case "épico":
        return "text-yellow-400";
      default:
        return "text-white";
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "pt" : "en");
  };

  const translate = (en: string, pt: string) => {
    return language === "en" ? en : pt;
  };

  // Obter categoria da arma atual para busca global
  const getCurrentWeaponCategory = () => {
    if (!isGlobalSearch || !currentWeapon) return currentCategory;
    
    const result = globalSearchResults.find(r => r.weapon.id === currentWeapon.id);
    return result ? result.category : currentCategory;
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-2 sm:p-4"
      style={{
        backgroundImage: "linear-gradient(rgba(26, 58, 74, 0.6), rgba(26, 58, 74, 0.7)), url('/BG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* CONTAINER PRINCIPAL - ALTURA FIXA NO DESKTOP, SCROLL NO MOBILE */}
      <div className="w-full max-w-[1100px] rounded-xl sm:rounded-2xl bg-tacticool-dark/90 backdrop-blur-md p-3 sm:p-4 flex flex-col shadow-2xl border border-tacticool-teal/30 
                      h-[100vh] sm:h-[90vh] sm:min-h-[800px] sm:max-h-[900px] 
                      overflow-y-auto sm:overflow-hidden custom-scrollbar">
        
        {/* Header - LOGO E BOTÕES DE FERRAMENTAS */}
        <header className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-3 px-1 sm:px-3 flex-shrink-0 gap-2">
          <img
            alt="TACTICOOL main logo in white rectangular border"
            className="object-contain"
            height="50"
            src="/Frame_25.svg"
            style={{ width: "280px" }}
            width="280"
          />
          
          {/* Botões de Ferramentas e Idioma */}
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-end">
            {/* Botão Ferramentas (apenas texto no mobile) */}
            <span className="text-white text-xs font-medium hidden sm:inline">
              {translate("Tools", "Ferramentas")}:
            </span>
            
            {/* Botão TacticIntel - Cor Vinho */}
            <a
              href="https://rivotriltacticool.github.io/tactintel/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-800 hover:bg-red-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-1"
            >
              <i className="fas fa-brain text-xs"></i>
              <span>TacticIntel</span>
            </a>
            
            {/* Botão TacticTool Operators - Cor Navy Blue */}
            <a
              href="https://rivotril.elektra.data2.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 hover:bg-blue-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-1"
            >
              <i className="fas fa-users text-xs"></i>
              <span className="hidden sm:inline">TacticTool Operators</span>
              <span className="sm:hidden">Operators</span>
            </a>
            
            {/* Botão de Idioma */}
            <button 
              onClick={toggleLanguage}
              className="text-white text-xs font-light bg-tacticool-teal/30 px-2 py-1.5 rounded-lg hover:bg-tacticool-teal/50 transition-colors"
            >
              PT/ENG
            </button>
          </div>
        </header>
        
        {/* Title - Mobile Optimized */}
        <h1 className="text-white text-lg sm:text-2xl md:text-3xl font-light text-center mb-2 sm:mb-3 px-2 sm:px-3 font-roboto leading-tight flex-shrink-0">
          {translate("Max Weapon Stats Without Mods or Operators", "Estatísticas Máximas de Armas sem Operadores e sem Mods")}
        </h1>
        
        <main className="flex flex-col lg:flex-row gap-3 sm:gap-4 px-1 sm:px-3 flex-1 sm:overflow-hidden">
          
          {/* Mobile Category Toggle Button */}
          <div className="lg:hidden mb-2 flex-shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full bg-tacticool-teal/60 text-white py-2 px-4 rounded-lg flex items-center justify-between"
            >
              <span className="text-sm font-medium">
                <i className="fas fa-list-ul mr-2"></i>
                {isGlobalSearch ? translate("Global Search", "Busca Global") : currentCategory}
              </span>
              <i className={`fas fa-chevron-${isMobileMenuOpen ? 'up' : 'down'} transition-transform`}></i>
            </button>
            
            {/* Mobile Category Menu */}
            {isMobileMenuOpen && (
              <div className="absolute z-50 w-[calc(100%-2rem)] mt-1 bg-tacticool-dark/95 backdrop-blur-md rounded-lg border border-tacticool-teal/30 max-h-60 overflow-y-auto">
                {weaponCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => selectCategory(category.id)}
                    className={`w-full text-left px-4 py-3 text-sm text-white hover:bg-tacticool-teal/30 transition-colors flex items-center space-x-3 ${
                      currentCategory === category.id && !isGlobalSearch ? "bg-tacticool-accent/20" : ""
                    }`}
                  >
                    <i className={`${category.icon} text-tacticool-accent`}></i>
                    <span>{category.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Category Sidebar */}
          <section className="hidden lg:flex rounded-2xl flex-col items-center py-4 w-[220px] bg-tacticool-teal/60 backdrop-blur-sm flex-shrink-0">
            <h2 className="text-white text-sm font-semibold mb-1 tracking-wide">
              <i className="fas fa-list-ul mr-2"></i>{translate("CATEGORIES", "CATEGORIAS")}
            </h2>
            <p className="text-white text-[8px] font-light mb-3 text-center px-3">
              {translate("Please select the weapon category", "Selecione a categoria de arma")}
            </p>
            <nav className="flex flex-col space-y-1.5 w-[150px] custom-scrollbar overflow-y-auto max-h-[600px] px-2">
              {weaponCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => selectCategory(category.id)}
                  className={`category-btn text-white text-xs font-light py-1.5 px-3 rounded-r-md rounded-l-full text-left flex items-center space-x-2 transition-all duration-300 hover:transform hover:translate-x-1 hover:shadow-lg ${
                    currentCategory === category.id && !isGlobalSearch
                      ? "bg-tacticool-accent shadow-tacticool-accent/30"
                      : "bg-tacticool-gray hover:bg-tacticool-gray/80"
                  }`}
                  type="button"
                >
                  <i className={`${category.icon} text-xs`}></i>
                  <span>{category.label}</span>
                </button>
              ))}
            </nav>
          </section>
          
          {/* Weapon Details - SEM OVERFLOW NO DESKTOP, COM SCROLL NO MOBILE */}
          <section className="rounded-xl sm:rounded-2xl flex flex-col flex-1 p-2 sm:p-3 relative bg-tacticool-teal shadow-lg sm:overflow-hidden">
            
            {/* Search Bar - Mobile Optimized */}
            <div className="mb-2 sm:mb-3 flex-shrink-0">
              <form 
                className="flex items-center w-full" 
                role="search" 
                onSubmit={handleSearch}
              >
                <input
                  aria-label={translate("Search by name in all categories", "Buscar por nome em todas as categorias")}
                  className="text-xs sm:text-sm font-light px-2 sm:px-3 py-1.5 sm:py-2 rounded-l-md border-0 focus:outline-none focus:ring-2 focus:ring-tacticool-accent bg-white/90 flex-1"
                  placeholder={translate("Search in all categories", "Buscar em todas as categorias")}
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="bg-tacticool-accent text-white text-xs sm:text-sm font-light px-3 sm:px-4 py-1.5 sm:py-2 rounded-r-md hover:bg-tacticool-accent/80 transition flex items-center"
                  type="submit"
                >
                  <i className="fas fa-search mr-1"></i>
                  <span className="hidden sm:inline">{translate("Search", "Buscar")}</span>
                </button>
              </form>
              
              {/* Search Results Info */}
              {isGlobalSearch && searchTerm && (
                <div className="mt-2 text-xs text-white/80 flex items-center justify-between">
                  <span>
                    <i className="fas fa-globe mr-1 text-tacticool-accent"></i>
                    {translate(`Found ${filteredWeapons.length} weapons`, `Encontradas ${filteredWeapons.length} armas`)}
                  </span>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setIsGlobalSearch(false);
                    }}
                    className="text-tacticool-accent hover:text-white transition-colors"
                  >
                    <i className="fas fa-times mr-1"></i>
                    {translate("Clear", "Limpar")}
                  </button>
                </div>
              )}
            </div>
            
            {/* Weapon Display - ALTURA FIXA NO DESKTOP, SCROLL NO MOBILE */}
            <div className="bg-tacticool-dark/50 rounded-lg sm:rounded-xl p-2 sm:p-4 flex-1 sm:overflow-hidden" style={{ minHeight: "500px" }}>
              {filteredWeapons.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-white text-base sm:text-lg mb-2">{translate("No weapon found", "Nenhuma arma encontrada")}</p>
                  <p className="text-white/60 text-sm">{translate("Try another search term", "Tente outro termo de pesquisa")}</p>
                </div>
              ) : (
                <div className="h-full relative">
                  
                  {/* Navigation Arrows - PEQUENAS E LIMPAS */}
                  <button
                    aria-label={translate("Previous weapon", "Arma anterior")}
                    className="text-tacticool-accent text-sm hover:text-white transition-all duration-200 hover:scale-110 absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center"
                    type="button"
                    onClick={() => navigateWeapon(-1)}
                    disabled={filteredWeapons.length <= 1}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  
                  <button
                    aria-label={translate("Next weapon", "Próxima arma")}
                    className="text-tacticool-accent text-sm hover:text-white transition-all duration-200 hover:scale-110 absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center"
                    type="button"
                    onClick={() => navigateWeapon(1)}
                    disabled={filteredWeapons.length <= 1}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  
                  {/* LAYOUT PRINCIPAL - PADDING PARA AS SETAS */}
                  <div className="flex flex-col lg:flex-row items-start justify-center h-full px-8 gap-4 lg:gap-6">
                    
                    {/* Weapon Image - TAMANHO RESPONSIVO CORRIGIDO */}
                    <div className="weapon-image-container bg-tacticool-gray/30 rounded-lg p-2 sm:p-3 relative flex items-center justify-center flex-shrink-0 w-full max-w-[300px] lg:max-w-[250px] mx-auto lg:mx-0" 
                         style={{ 
                           height: "160px", 
                           minHeight: "160px"
                         }}>
                      {isImageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="loading-spinner border-2 border-white/30 border-t-tacticool-accent rounded-full w-5 h-5 animate-spin"></div>
                        </div>
                      )}
                      {currentWeapon && (
                        <img
                          alt={`${currentWeapon.name} weapon image`}
                          className={`rounded-md object-contain transition-opacity duration-300 w-full h-full ${
                            isImageLoading ? "opacity-0" : "opacity-100"
                          }`}
                          style={{ 
                            maxWidth: "100%", 
                            maxHeight: "100%",
                            objectFit: "contain"
                          }}
                          src={currentWeapon.image}
                          onLoad={() => setIsImageLoading(false)}
                          onLoadStart={() => setIsImageLoading(true)}
                          onError={(e) => {
                            setIsImageLoading(false);
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300";
                          }}
                        />
                      )}
                    </div>
                    
                    {/* Weapon Stats - ESPAÇAMENTO REDUZIDO */}
                    {currentWeapon && (
                      <div className="w-full lg:w-[420px] text-white font-light leading-tight flex-shrink-0">
                        {/* Header Info - ESPAÇAMENTO REDUZIDO */}
                        <div className="mb-2">
                          <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest mb-1 text-tacticool-accent">
                            {language === "en" ? currentWeapon.primary.replace("ARMA PRIMÁRIA:", "PRIMARY WEAPON:").replace("ARMA SECUNDÁRIA:", "SECONDARY WEAPON:").replace("ARMA CORPO A CORPO:", "MELEE WEAPON:").replace("ARMA EXPERIMENTAL:", "EXPERIMENTAL WEAPON:") : currentWeapon.primary}
                          </p>
                          <p className={`text-xl sm:text-2xl font-black mb-1 ${getRarityColor(currentWeapon.rarity)} leading-tight`}>
                            {currentWeapon.name}
                          </p>
                          
                          {/* Mostrar categoria na busca global */}
                          {isGlobalSearch && (
                            <p className="text-tacticool-accent text-xs font-medium mb-1">
                              <i className="fas fa-tag mr-1"></i>
                              {getCurrentWeaponCategory()}
                            </p>
                          )}
                          
                          {/* RARITY E STARS NA MESMA LINHA - ESPAÇAMENTO REDUZIDO */}
                          <div className="flex items-center gap-3 mb-1">
                            <p className="text-white text-xs font-semibold">
                              {translate("Rarity", "Raridade")}: {language === "en" 
                                ? currentWeapon.rarity === "Comum" ? "Common" 
                                  : currentWeapon.rarity === "Incomum" ? "Uncommon"
                                  : currentWeapon.rarity === "Raro" ? "Rare"
                                  : currentWeapon.rarity === "Épico" ? "Epic"
                                  : currentWeapon.rarity
                                : currentWeapon.rarity}
                            </p>
                            <div className="flex">
                              {renderStars(5)}
                            </div>
                          </div>
                        </div>
                        
                        {/* Stats Header - ESPAÇAMENTO REDUZIDO */}
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[8px] sm:text-[9px] uppercase tracking-widest font-light text-tacticool-accent">
                            STATS
                          </span>
                          <span className="text-[8px] sm:text-[9px] uppercase tracking-widest font-light text-tacticool-accent">
                            {translate("MAX", "MÁXIMA")}
                          </span>
                        </div>
                        
                        {/* ÁREA DE STATS - ESPAÇAMENTO REDUZIDO ENTRE STATS */}
                        <div className="space-y-1">
                          {currentWeapon.stats.map((stat, index) => (
                            <div 
                              key={index}
                              className="stat-item flex items-center justify-between bg-tacticool-gray/30 rounded-md px-3 py-1.5 opacity-0 transform translate-y-2 animate-fadeInUp"
                              style={{ 
                                animationDelay: `${(index + 1) * 0.1}s`, 
                                animationFillMode: 'forwards',
                                minHeight: '24px'
                              }}
                            >
                              <div className="flex items-center space-x-3 min-w-0 flex-1">
                                <i className={`${stat.icon} text-tacticool-accent w-4 text-[10px] flex-shrink-0`}></i>
                                <span className="text-[10px] sm:text-[11px] truncate">
                                  {language === "en" 
                                    ? stat.label === "Dano" ? "Damage"
                                      : stat.label === "Dano Melee" ? "Melee Dmg"
                                      : stat.label === "Munição" ? "Ammo"
                                      : stat.label === "Cadência de Tiro" ? "Fire Rate"
                                      : stat.label === "Precisão" ? "Accuracy"
                                      : stat.label === "Alcance" ? "Range"
                                      : stat.label === "Velocidade" ? "Speed"
                                      : stat.label === "Recarga" ? "Reload"
                                      : stat.label === "Velocidade de Ataque" ? "Atk Speed"
                                      : stat.label === "Burn" ? "Queimadura"
                                      : stat.label === "Fuel" ? "Combustivel"
                                      : stat.label === "Bleed" ? "Sangramento"
                                      : stat.label === "Força de Tração" ? "Pull Force"
                                      : stat.label === "Velocidade do Ativo" ? "Active Movement Speed"
                                      : stat.label === "Distancia da Tração" ? "Pull Distance"
                                      : stat.label === "Raio de Dano" ? "Damage Radius"
                                      : stat.label === "Velocidade do Personagem" ? "Character Speed"
                                      : stat.label === "Tempo de Recarga" ? "Reload Time"
                                      : stat.label === "Durabilidade" ? "Durability"
                                      : stat.label === "Energia" ? "Energy"
                                      : stat.label === "Taxa de Disparo" ? "Fire Rate"
                                      : stat.label
                                    : stat.label}
                                </span>
                              </div>
                              <span className="font-bold text-yellow-400 text-[10px] sm:text-[11px] ml-3 flex-shrink-0">{stat.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            {/* Weapon Counter - ALTURA FIXA */}
            {filteredWeapons.length > 0 && (
              <div className="flex justify-center items-center space-x-3 mt-2 flex-shrink-0" style={{ height: "30px" }}>
                <span className="text-white text-xs">
                  {translate("Weapon", "Arma")} {currentIndex + 1} {translate("of", "de")} {filteredWeapons.length}
                  {isGlobalSearch && ` (${translate("Global Search", "Busca Global")})`}
                </span>
                <div className="flex space-x-1">
                  {renderWeaponIndicators()}
                </div>
              </div>
            )}
          </section>
        </main>
        
        {/* Footer - ALTURA FIXA */}
        <footer className="flex flex-col sm:flex-row justify-between items-center mt-3 sm:mt-4 px-2 sm:px-3 text-white text-[8px] sm:text-[9px] font-light gap-2 flex-shrink-0" style={{ height: "60px" }}>
          <p className="max-w-full sm:max-w-[700px] text-center sm:text-left text-[8px] sm:text-[9px] leading-relaxed">
            {translate(
              "Hey, if you enjoy the tools I create, please consider supporting me so I can continue developing new features and improvements. Special thanks to JB Chicken for the data. Thank you!",
              "Ei, se você gosta das ferramentas que eu crio, por favor considere me apoiar para que eu possa continuar desenvolvendo novos recursos e melhorias. Obrigado especial para o JB Chicken pelos dados. Obrigado!"
            )}
          </p>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <a
              aria-label="TikTok link"
              className="text-yellow-400 text-base sm:text-lg hover:text-yellow-300 transition transform hover:scale-110"
              href="https://www.tiktok.com/@rivotril.tacticool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            
            <a
              href="https://market.my.games/pt-BR/games/90"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TACTICOOL on My.Games"
            >
              <img
                alt="Black and yellow stylized icon of a person with a headset"
                className="object-contain hover:opacity-80 transition-opacity"
                height="30"
                src="/code.png"
                style={{ width: "120px" }}
                width="120"
              />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}