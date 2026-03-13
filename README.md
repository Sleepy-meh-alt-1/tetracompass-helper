# Tetracompass Angle Tracker (Alt1)

An **Alt1 plugin** that scans the arrow angle of Tetra Compasses and groups identical angles so you can **speed-solve large stacks of tetras**.

Instead of solving each compass individually, this tool:

1. Scans each tetra **once**
2. Stores the **arrow angle**
3. Groups identical angles
4. Highlights matching compasses in your bank for **fast solving**

---

# Requirements

Before using the tool, make sure the following settings are configured.

## 1. RuneScape Graphics Settings

Set:

- **Anti-Aliasing Quality → High**
- **Bank placeholders → Enabled**

---

## 2. Position the Tetracompass Window

Make sure the **Tetracompass arrow window**:

- is **fully visible**
- is **not covered by anything**
- is **not partially hidden**

If the detection panel shows:

Clue window: not found


You may need to **slightly resize or reposition the RuneScape window**.

Detection is not perfect yet, and small layout changes can affect it.

---

# 3. Scanning Tetras

Scan tetras **in order**.

The tooltip helps track your progress while scanning.

Example:

Scanned: 30 | (inv 2)


Meaning:

- You scanned **30 total tetras**
- The last scanned tetra was **inventory slot 2**

This helps you **keep the correct scanning order**. Just make sure the numbers increase each time you open the next tetra.

---

## Auto Save

Auto-save works by detecting **angle changes**.

When the angle changes → the plugin saves the new tetra automatically.

However, if **two identical angles appear back-to-back**, auto-save cannot detect the change.

In that case:

**Click `Save current tetra` manually.**

---

## Important

- Do **NOT reorder tetras after scanning begins**
- The plugin relies on the **bank order staying identical**

The plugin stores angles sequentially and assumes the **same order as your bank tab**.

If the order changes, the angle groups will **no longer match the correct compasses**.

---

# 4. Bank Overlay

The **Show bank overlay** button highlights which tetras belong to which angle group.

You can:

- Show **all groups**
- Click a group to **highlight only that group**
- Sort groups by **number of matching angles**

Workflow:

1. Scan all tetras
2. Open the bank
3. Show bank overlay
4. Collect matching tetras
5. Solve them
6. Repeat

---

## Important

The detector may occasionally confuse other UI elements for tetras.

To avoid this:

- Hide **bank header icons**
- Avoid **inventory or other UI overlapping the bank**

Then run **Show bank overlay**, collect the matching tetras, solve them, and repeat.