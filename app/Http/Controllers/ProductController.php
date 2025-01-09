<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{

  public function index()
  {
    return Inertia::render('Product/Products', [
      'products' => Product::all(),
    ]);
  }

  public function store(Request $request)
  {
    $validated = $request->validate([
      'name' => 'required|string|max:255',
      'company' => 'required|string',
      'price' => 'required|numeric',
      'amount' => 'required|integer',
    ]);

    $product = Product::create($validated);

    return redirect()->route('products.index')->with('product', $product);
  }

  public function update(Request $request, $id)
  {
    $product = Product::findOrFail($id);

    $validatedData = $request->validate([
      'name' => 'required|string|max:255',
      'company' => 'required|string',
      'price' => 'required|numeric',
      'amount' => 'required|integer',
    ]);

    $product->update($validatedData);

    return redirect()->route('products.index')->with('product', $product);
  }

  // Delete a product
  public function destroy($id)
  {
    $product = Product::findOrFail($id);
    $product->delete();

    return response()->json(['message' => 'Product deleted successfully'], 200);
  }
}
