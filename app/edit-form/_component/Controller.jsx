import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Themes from "@/app/_data/Themes";
import GradientBg from "@/app/_data/GradientBg";
import { Button } from "@/components/ui/button";
import Style from "@/app/_data/Style";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

function Controller({
  selectedTheme,
  selectedBackground,
  selectedStyle,
  setSignInEnable,
}) {
  const [showMore, setShowMore] = useState(6);

  const handleThemeChange = (value) => {
    try {
      selectedTheme(value);
      toast.success(
        <div className="flex items-center">
          <span className="mr-2 text-3xl">🎉</span>
          <div>
            <strong className="block">Theme Updated!</strong>
            <p>Your theme has been successfully updated.</p>
          </div>
        </div>,
        {
          style: {
            border: "1px solid #4caf50", // Green border for success
            padding: "16px", // Padding for spacing
            color: "#4caf50", // Text color
            backgroundColor: "#f9fff9", // Light green background
            borderRadius: "8px", // Rounded corners
            fontFamily: "'Inter', sans-serif", // Font family
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            marginBottom: "16px", // Space below the toast box
            marginRight: "16px",
          },
          duration: 4000, // Duration for the toast to be visible
          icon: "✅", // Success icon
          position: "bottom-right", // Position of the toast
        }
      );
    } catch (error) {
      console.error("Error updating theme:", error);
      toast.error(
        <div className="flex items-center">
          <span className="mr-2 text-2xl">❌</span>
          <div>
            <strong className="block">Update Failed!</strong>
            <p>There was an error updating the theme. Please try again.</p>
          </div>
        </div>,
        {
          style: {
            border: "1px solid #f44336", // Red border for errors
            padding: "16px", // Padding for spacing
            color: "#f44336", // Text color
            backgroundColor: "#fff4f4", // Light red background
            borderRadius: "8px", // Rounded corners
            fontFamily: "'Inter', sans-serif", // Font family
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            marginBottom: "16px", // Space below the toast box
            marginRight: "16px",
          },
          duration: 3000, // Duration for the toast to be visible
          icon: "⚠️", // Error icon
          position: "bottom-right", // Position of the toast
        }
      );
    }
  };

  const handleBackgroundChange = (value) => {
    try {
      selectedBackground(value);
      toast.success(
        <div className="flex items-center">
          <span className="mr-2 text-3xl">🎉</span>
          <div>
            <strong className="block">Background Updated!</strong>
            <p>Your background has been successfully updated.</p>
          </div>
        </div>,
        {
          style: {
            border: "1px solid #4caf50", // Green border for success
            padding: "16px", // Padding for spacing
            color: "#4caf50", // Text color
            backgroundColor: "#f9fff9", // Light green background
            borderRadius: "8px", // Rounded corners
            fontFamily: "'Inter', sans-serif", // Font family
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            marginBottom: "16px", // Space below the toast box
            marginRight: "16px",
          },
          duration: 3000, // Duration for the toast to be visible
          icon: "✅", // Success icon
          position: "bottom-right", // Position of the toast
        }
      );
    } catch (error) {
      console.error("Error updating background:", error);
      toast.error(
        <div className="flex items-center">
          <span className="mr-2 text-2xl">❌</span>
          <div>
            <strong className="block">Update Failed!</strong>
            <p>There was an error updating the background. Please try again.</p>
          </div>
        </div>,
        {
          style: {
            border: "1px solid #f44336", // Red border for errors
            padding: "16px", // Padding for spacing
            color: "#f44336", // Text color
            backgroundColor: "#fff4f4", // Light red background
            borderRadius: "8px", // Rounded corners
            fontFamily: "'Inter', sans-serif", // Font family
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            marginBottom: "16px", // Space below the toast box
            marginRight: "16px",
          },
          duration: 3000, // Duration for the toast to be visible
          icon: "⚠️", // Error icon
          position: "bottom-right", // Position of the toast
        }
      );
    }
  };

  const handleStyleChange = (value) => {
    try {
      selectedStyle(value);
      toast.success(
        <div className="flex items-center">
          <span className="mr-2 text-3xl">🎉</span>
          <div>
            <strong className="block">Style Updated!</strong>
            <p>Your style has been successfully updated.</p>
          </div>
        </div>,
        {
          style: {
            border: "1px solid #4caf50", // Green border for success
            padding: "16px", // Padding for spacing
            color: "#4caf50", // Text color
            backgroundColor: "#f9fff9", // Light green background
            borderRadius: "8px", // Rounded corners
            fontFamily: "'Inter', sans-serif", // Font family
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            marginBottom: "16px", // Space below the toast box
            marginRight: "16px",
          },
          duration: 3000, // Duration for the toast to be visible
          icon: "✅", // Success icon
          position: "bottom-right", // Position of the toast
        }
      );
    } catch (error) {
      console.error("Error updating style:", error);
      toast.error(
        <div className="flex items-center">
          <span className="mr-2 text-2xl">❌</span>
          <div>
            <strong className="block">Update Failed!</strong>
            <p>There was an error updating the style. Please try again.</p>
          </div>
        </div>,
        {
          style: {
            border: "1px solid #f44336", // Red border for errors
            padding: "16px", // Padding for spacing
            color: "#f44336", // Text color
            backgroundColor: "#fff4f4", // Light red background
            borderRadius: "8px", // Rounded corners
            fontFamily: "'Inter', sans-serif", // Font family
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            marginBottom: "16px", // Space below the toast box
            marginRight: "16px",
          },
          duration: 3000, // Duration for the toast to be visible
          icon: "⚠️", // Error icon
          position: "bottom-right", // Position of the toast
        }
      );
    }
  };

  const handleSignInEnableChange = (value) => {
    try {
      setSignInEnable(value);
      toast.success(
        <div className="flex items-center">
          <span className="mr-2 text-3xl">🎉</span>
          <div>
            <strong className="block">Sign-In Option Updated!</strong>
            <p>You have successfully updated the sign-in option.</p>
          </div>
        </div>,
        {
          style: {
            border: "1px solid #4caf50", // Green border for success
            padding: "16px", // Padding for spacing
            color: "#4caf50", // Text color
            backgroundColor: "#f9fff9", // Light green background
            borderRadius: "8px", // Rounded corners
            fontFamily: "'Inter', sans-serif", // Font family
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            marginBottom: "16px", // Space below the toast box
            marginRight: "16px",
          },
          duration: 3000, // Duration for the toast to be visible
          icon: "✅", // Success icon
          position: "bottom-right", // Position of the toast
        }
      );
    } catch (error) {
      console.error("Error updating sign-in option:", error);
      toast.error(
        <div className="flex items-center">
          <span className="mr-2 text-2xl">❌</span>
          <div>
            <strong className="block">Update Failed!</strong>
            <p>
              There was an error updating the sign-in option. Please try again.
            </p>
          </div>
        </div>,
        {
          style: {
            border: "1px solid #f44336", // Red border for errors
            padding: "16px", // Padding for spacing
            color: "#f44336", // Text color
            backgroundColor: "#fff4f4", // Light red background
            borderRadius: "8px", // Rounded corners
            fontFamily: "'Inter', sans-serif", // Font family
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            marginBottom: "16px", // Space below the toast box
            marginRight: "16px",
          },
          duration: 3000, // Duration for the toast to be visible
          icon: "⚠️", // Error icon
          position: "bottom-right", // Position of the toast
        }
      );
    }
  };

  return (
    <div>
      {/* Theme selection Controller  */}
      <h2 className="my-1">Themes</h2>
      <Select onValueChange={handleThemeChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {Themes.map((theme, index) => (
            <SelectItem value={theme.theme} key={index}>
              <div className="flex gap-3">
                <div className="flex">
                  <div
                    className="h-5 w-5 rounded-l-md"
                    style={{ backgroundColor: theme.primary }}
                  ></div>
                  <div
                    className="h-5 w-5"
                    style={{ backgroundColor: theme.secondary }}
                  ></div>
                  <div
                    className="h-5 w-5"
                    style={{ backgroundColor: theme.accent }}
                  ></div>
                  <div
                    className="h-5 w-5 rounded-r-md"
                    style={{ backgroundColor: theme.neutral }}
                  ></div>
                </div>
                {theme.theme}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Background Selection Controller  */}
      <h2 className="mt-8 my-1"> Background </h2>
      <div className="grid grid-cols-3 gap-5">
        {GradientBg.map(
          (bg, index) =>
            index < showMore && (
              <div
                key={index}
                onClick={() => handleBackgroundChange(bg.gradient)}
                className="w-full h-[70px] rounded-lg cursor-pointer hover:border-black hover:border-2 flex items-center justify-center"
                style={{ background: bg.gradient }}
              >
                {index === 0 && "None"}
              </div>
            )
        )}
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="w-full my-1"
        onClick={() => setShowMore(showMore > 6 ? 6 : 20)}
      >
        {showMore > 6 ? "Show Less" : "Show More"}
      </Button>

      {/* Style Selection Controller  */}
      <div>
        <label>Style</label>
        <div className="grid grid-cols-3 gap-3">
          {Style.map((item, index) => (
            <div key={index}>
              <div
                className="cursor-pointer hover:border-2 rounded-lg"
                onClick={() => handleStyleChange(item)}
              >
                <img
                  src={item.img}
                  width={600}
                  height={80}
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-center">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 my-4 items-center mt-10">
        <Checkbox onCheckedChange={handleSignInEnableChange} />{" "}
        <h2>Enable Social Authentication before submit the form</h2>
      </div>
    </div>
  );
}

export default Controller;
