import { createContext, useEffect } from "react";
import { useState } from "react";
import * as MediaLibrary from "expo-media-library";

type MediaContextType = {
  isMediaPermissionProvided: boolean | undefined;
}

export const MediaContext = createContext<MediaContextType>({
  isMediaPermissionProvided: false,
});

export const MediaProvider = ({ children }: { children: any }) => {
  const [isMediaPermissionProvided, setIsMediaPermissionProvided] =
    useState<boolean>(false);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();


  async function getMediaPermission() {
    if (permissionResponse?.status !== 'granted') {
      await requestPermission();
    }
    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true,
    });
    console.log('fetchedAlbums', fetchedAlbums)
  }

  useEffect(() => {
    getMediaPermission();
  }, []);

  return (
    <MediaContext.Provider value={{ isMediaPermissionProvided }}>
      {children}
    </MediaContext.Provider>
  );
};
