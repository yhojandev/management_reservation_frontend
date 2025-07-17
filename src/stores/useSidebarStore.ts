import { create } from "zustand";

interface SidebarState {
  isSidebarHidden: boolean; // para esconder y mostrar sidebar en PC
  isMobileSidebarActive: boolean; // para esconder y mostrar sidebar en móvil
  isMobileOverlayActive: boolean; // para esconder y mostrar el overlay en móvil

  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  closeMobileSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isSidebarHidden: false, // Estado inicial: sidebar visible en PC
  isMobileSidebarActive: false, // Estado inicial: sidebar móvil oculta
  isMobileOverlayActive: false, // Estado inicial: overlay móvil oculto

  toggleSidebar: () =>
    set((state) => ({ isSidebarHidden: !state.isSidebarHidden })),

  toggleMobileSidebar: () =>
    set((state) => ({
      isMobileSidebarActive: !state.isMobileSidebarActive,
      isMobileOverlayActive: !state.isMobileOverlayActive,
    })),

  closeMobileSidebar: () =>
    set({
      isMobileSidebarActive: false,
      isMobileOverlayActive: false,
    }),
}));
